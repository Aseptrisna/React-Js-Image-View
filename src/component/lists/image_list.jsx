import React, { useState, useEffect } from "react";
import "../assets/css/image.css";
import Service from "../service";
import Icon from "../assets/image/sand-clock.png";

function ImageList() {
  const [imageData, setImageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = {
      page: currentPage,
      limit: imagesPerPage,
    };
    setTimeout(() => {
      getData(data);
    }, 2000);
  }, []);

  const getData = async (data) => {
    Service.getData(data)
      .then((data) => {
        setLoading(false);
        setImageData(data.data.history);
        setTotalPages(data.data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(true);
      });
  };

  const paginate = (pageNumber) => {
    setLoading(true);
    setCurrentPage(pageNumber);
    const data = {
      page: pageNumber,
      limit: imagesPerPage,
    };
    setTimeout(() => {
      getData(data);
    }, 2000);
  };
  return (
    <div className="container">
      {loading ? (
        <div className="loading">
          <div className="spinner">
            <img
              src={Icon}
              className="card-img-top img-fluid"
              alt=""
              style={{
                margin: "auto",
                display: "block",
                width: "80px",
                height: "80px",
                marginTop: "20px",
                alignContent: "center",
              }}
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {imageData.map((image, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4" border="warning">
                  <img
                    src={image.value}
                    className="card-img-top img-fluid"
                    alt={image.value}
                    style={{
                      margin: "auto",
                      display: "block",
                      width: "330px",
                      height: "250px",
                      marginTop: "20px",
                      alignContent: "center",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">ID RFID:{image.guid}</h5>
                    <p className="card-text">TIME: {image.datetime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(totalPages / imagesPerPage) },
              (_, index) => (
                <div key={index}>
                  <button
                    className={index + 1 === currentPage ? "active" : ""}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </div>
              )
            )}
          </div>
          <div className="footer">
            <p>&copy; 2023 PPTIK</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageList;
