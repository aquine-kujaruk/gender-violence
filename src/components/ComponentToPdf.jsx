import React, {useEffect, createRef} from 'react';
import {useScreenshot, createFileName} from 'use-react-screenshot';
import {jsPDF} from 'jspdf';

const ComponentToPdf = ({children, setDownload}) => {
	const ref = createRef(null);
	const [image, takeScreenShot] = useScreenshot();

	const download = async (image, {name = 'img', extension = 'jpeg'} = {}) => {
		const options = {orientation: 'p', unit: 'mm', format: 'A4'};
		var doc = new jsPDF(options);

		let left = 15;
		let top = 8;
		const imgWidth = 100;
		const imgHeight = 100;

		doc.addImage(image, 'JPEG', left, top, imgWidth, imgHeight);

		const blob = await doc.output('blob');
		const url = window.URL.createObjectURL(blob);

		const link = document.createElement('a');
		document.body.appendChild(link);
		link.style = 'display: none';
		const fileName = 'vct_illustration.pdf';

		link.href = url;
		link.download = fileName;
		link.click();
		setDownload(false);
	};

	useEffect(() => {
		takeScreenShot(ref.current);
	}, [ref, takeScreenShot]);

	useEffect(() => {
		if (image) {
			return download(image, {name: 'lorem-ipsum', extension: 'jpeg'});
		}
	}, [image]);

	return <div ref={ref}>{children}</div>;
};

export default ComponentToPdf;
