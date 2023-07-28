"use client";

import React from "react";
import { Annotation, Geographies, Geography } from "react-simple-maps";
import { ComposableOwnMap, MapWrap } from "./style";

const MapChart = () => {
  return (
    <MapWrap>
      <ComposableOwnMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -52.0, 0],
          center: [15, -3],
          scale: 700,
        }}
      >
        <Geographies
          geography="/features.json"
          fill="#2C065D"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[26, 50]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "#fff",
            strokeWidth: 1,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
            {"Ukraine"}
          </text>
        </Annotation>
      </ComposableOwnMap>
    </MapWrap>
  );
};

export default React.memo(MapChart);
