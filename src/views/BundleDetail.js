import React from "react";
import { Col, Row } from "reactstrap";
import PreviewPDF from "../components/PreviewPDF";

const BundleDetail = () => {
  return (
    <div className="d-flex justify-center items-center h-screen bg-color">
      <div className="my-auto w-50 box-com rounded-3xl pt-28 px-20 pb-20">
        <Row>
            <Col>
                <Row>
                    <Col>
                        <PreviewPDF/>
                    </Col>
                </Row>
            </Col>
            <Col>
            
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default BundleDetail;
