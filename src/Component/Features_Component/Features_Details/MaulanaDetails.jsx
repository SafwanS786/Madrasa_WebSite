import React from "react";
import { useFeature } from "../../../Context/FeatureContext";
import FeatureDetails from "../Features_Details";

export default function MaulanaDetails() {
  const feature = useFeature();
  return <FeatureDetails data={feature.maulana} />;
}
