import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';

const PreviewPDF = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const url = "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);
		pdfjs.GlobalWorkerOptions.workerSrc = 
		`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	return (
		<div>
			<nav>
				<button onClick={goToPrevPage}>Prev</button>
				<button onClick={goToNextPage}>Next</button>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</nav>

			<Document
                file={url}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);
};

export default PreviewPDF;