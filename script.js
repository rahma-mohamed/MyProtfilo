function downloadPDF() {
    // Replace 'your_pdf_file.pdf' with the actual file path or URL
    const pdfFilePath = './rahma_mohamed_hammad.pdf';

    // Creating an invisible link element
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfFilePath;
    downloadLink.download = './rahma_mohamed_hammad.pdf';

    // Appending the link to the body
    document.body.appendChild(downloadLink);

    // Triggering the click event to start the download
    downloadLink.click();

    // Removing the link from the DOM
    document.body.removeChild(downloadLink);
}