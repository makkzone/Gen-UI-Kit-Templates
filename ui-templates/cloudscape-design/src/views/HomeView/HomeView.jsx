import * as React from "react";
import { Container, ContentLayout, Header} from "@cloudscape-design/components";

function HomeView () {
  
  return (
    <>
    <ContentLayout
      disableOverlap
      headerBackgroundStyle="linear-gradient(to right, #2E3192, #1BFFFF)"
      headerVariant="high-contrast"
      defaultPadding
      header={<Header variant="h1" description="View Description">Home View</Header>}
      
    >
      
    </ContentLayout>
    
    </>
  );
};

export default HomeView;
