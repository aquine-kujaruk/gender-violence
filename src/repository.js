import firebase from './firebase';

const db = firebase.collection('/users');

class Repository {
	getCount() {
		return new Promise((resolve, reject) => {
			try {
				db.orderBy('identifier', 'desc')
					.limit(1)
					.onSnapshot((items) => {
						const response = [];

						items.forEach((item) => {
							const data = item.data();
							response.push({
								identifier: data.identifier
							});
						});

						if (response.length === 0) resolve(0);
						else resolve(Number(response[0].identifier));
					});
			} catch (error) {
				reject(error);
			}
		});
	}

	async createUser() {
		const count = await this.getCount();
		const identifier = count + 1;
		await db.add({identifier});
		return identifier;
	}

	getUserIdByIdentifier(identifier) {
		return new Promise((resolve, reject) => {
			try {
				db.where('identifier', '==', identifier)
					.limit(1)
					.onSnapshot((items) => {
						const response = [];

						items.forEach((item) => {
							response.push({
								id: item.id
							});
						});

						if (response.length === 0) resolve(null);
						else resolve(response[0].id);
					});
			} catch (error) {
				reject(error);
			}
		});
	}

	async updateUser(identifier, data) {
		const id = await this.getUserIdByIdentifier(identifier);
		if (!id) return;
		return db.doc(id).update(data);
	}
}

export default new Repository();
