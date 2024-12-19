import React, { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = 
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfFromUrl = ({ pdfUrl }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndRenderPdf = async () => {
      try {
        const response = await fetch(pdfUrl);
        const pdfData = new Uint8Array(await response.arrayBuffer());
        const pdf = await pdfjsLib.getDocument(pdfData).promise;

        const imageList = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 3 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          await page.render(renderContext).promise;

          imageList.push({ page: i, src: canvas.toDataURL("image/webp") });
        }

        setImages(imageList);
      } catch (error) {
        console.error("Error fetching or rendering PDF:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndRenderPdf();
  }, [pdfUrl]);

  return (
    <div className="pdfviewer__content">
      {loading ? (
        <div className="loading"><p>กำลังโหลดภาพ</p><p><div class="loader"></div></p></div>
      ) :  (
        images.length > 0 ? (
          <div className="pdfviewer__items">
            {images.map(({ page, src }) => (
              <div key={page}>
                <div className="page__nums">
                  <hr className="hr-text" data-content={page} />
                </div>
                <div className="pdfviewer__group">
                  <img src={src} alt={`Page ${page}`} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data">
            <p><div class="loaders"></div></p>
            <p>ไม่มีข้อมูล</p>
          </div>
        )
      )}
    </div>
  );
};

export default PdfFromUrl;
