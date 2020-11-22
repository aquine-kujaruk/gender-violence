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
		const getSize = (base64) => {
			const header = atob(base64.slice(0, 50)).slice(16, 24);
			const uint8 = Uint8Array.from(header, (c) => c.charCodeAt(0));
			const dataView = new DataView(uint8.buffer);

			return {
				width: dataView.getInt32(0),
				height: dataView.getInt32(4)
			};
		};

		const download = async (image) => {
			const {width, height} = getSize(image.split('data:image/png;base64,')[1]);
			var pdf = new jsPDF({
				orientation: width > height ? 'L' : 'P',
				unit: 'px',
				format: [width, height]
			});
			pdf.addImage(image, 'JPEG', 0, 0, width, height);

			const blob = await pdf.output('blob');
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
