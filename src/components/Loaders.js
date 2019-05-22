import React from 'react';
import ContentLoader from 'react-content-loader';

export const RoomLoader = () => (
  <ContentLoader
    height={350}
    width={400}
    speed={2}
    primaryColor="#f5f5f5"
    secondaryColor="#EFEFEF"
  >
    <rect x="0" y="0" rx="2" ry="2" width="135" height="30" />
    <rect x="285" y="0" rx="2" ry="2" width="135" height="30" />
    <rect x="0" y="75" rx="5" ry="5" width="150" height="18" />
    <rect x="0" y="120" rx="3" ry="3" width="400" height="8" />
    <rect x="0" y="140" rx="3" ry="3" width="400" height="8" />
    <rect x="0" y="160" rx="3" ry="3" width="400" height="8" />
    <rect x="0" y="200" rx="5" ry="5" width="150" height="18" />
    <rect x="0" y="240" rx="3" ry="3" width="400" height="8" />
    <rect x="0" y="280" rx="5" ry="5" width="150" height="18" />
    <rect x="0" y="320" rx="3" ry="3" width="400" height="8" />
  </ContentLoader>
);

export const PlayerLoader = () => (
  <ContentLoader
    height={350}
    width={400}
    speed={2}
    primaryColor="#EFEFEF"
    secondaryColor="#D3E5E5"
  >
    <rect x="0" y="0" rx="2" ry="2" width="135" height="30" />
    <rect x="285" y="0" rx="2" ry="2" width="135" height="30" />
    <rect x="0" y="100" rx="3" ry="3" width="190" height="8" />
    <rect x="200" y="100" rx="3" ry="3" width="190" height="8" />
    <rect x="0" y="130" rx="3" ry="3" width="190" height="8" />
    <rect x="200" y="130" rx="3" ry="3" width="190" height="8" />
    <rect x="0" y="160" rx="3" ry="3" width="190" height="8" />
    {/* <rect x="200" y="140" rx="3" ry="3" width="190" height="8" /> */}
  </ContentLoader>
);
