import React from "react";
import { useFeature } from "../../../../src/Context/FeatureContext";
import FeatureDetails from "../../Features_Component/Features_Details";

export default function StudentDetails() {
  const features = useFeature();
  return <FeatureDetails data={features.student} />;
}
