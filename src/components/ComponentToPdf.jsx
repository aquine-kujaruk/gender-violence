import React, {useEffect, createRef} from 'react';
import {useScreenshot} from 'use-react-screenshot';
import {jsPDF} from 'jspdf';

const ComponentToPdf = ({children, setDownload}) => {
	const ref = createRef(null);
	const [image, takeScreenShot] = useScreenshot();

	useEffect(() => {
		takeScreenShot(ref.current);
	}, [ref, takeScreenShot]);

	useEffect(() => {
		const download = async (image) => {
			const options = {orientation: 'p', unit: 'px', format: 'A4'};
			var doc = new jsPDF(options);

			let left = 0;
			let top = 0;
			const imgWidth = 414;
			const imgHeight = 736;

			doc.addImage(image, 'JPEG', left, top, imgWidth, imgHeight);

			const blob = await doc.output('blob');
			const url = window.URL.createObjectURL(blob);

			const link = document.createElement('a');
			document.body.appendChild(link);
			link.style = 'display: none';
			const fileName = 'download.pdf';

			link.href = url;
			link.download = fileName;
			link.click();
			setDownload(false);
		};

		if (image) {
			download(image);
		}
	}, [image, setDownload]);

	return <div ref={ref}>{children}</div>;
};

export default ComponentToPdf;
