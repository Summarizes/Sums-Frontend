import { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Viewer,Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const PreviewPDF = () => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin()

	return (
		<div className='h-1/2'>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
			<Viewer
				fileUrl="https://www.orimi.com/pdf-test.pdf"
				// fileUrl="./components/somefile.pdf"
				plugins={[
					defaultLayoutPluginInstance
				]}
			/>
			</Worker>
			
		</div>
	)
	// const [numPages, setNumPages] = useState(1);
	// const [pageNumber, setPageNumber] = useState(1);
	// const url = "https://www.africau.edu/images/default/sample.pdf"
	// // const url = "./components/somefile.pdf"

	// const onDocumentLoadSuccess = ({ numPages }) => {
	// 	setNumPages(numPages);
	// };

	// const goToPrevPage = () =>
	// 	setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	// const goToNextPage = () =>
	// 	setPageNumber(
	// 		pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
	// 	);
	// 	pdfjs.GlobalWorkerOptions.workerSrc = 
	// 	`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	// return (
	// 	<div>
	// 		<nav>
	// 			<button onClick={goToPrevPage}>Prev</button>
	// 			<button onClick={goToNextPage}>Next</button>
	// 			<p>
	// 				Page {pageNumber} of {numPages}
	// 			</p>
	// 		</nav>

	// 		<Document
	//             file={url}
	// 			onLoadSuccess={onDocumentLoadSuccess}
	// 		>
	// 			<Page pageNumber={pageNumber} />
	// 		</Document>
	// 	</div>
	// );
};

export default PreviewPDF;