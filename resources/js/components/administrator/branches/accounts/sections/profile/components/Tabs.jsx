import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TableInformation from "./Table";
function AccountProfileTabs() {
    return (
        <Tabs className="mt-3"  isFitted>
            <TabList>
                <Tab>Information</Tab>
                <Tab>Attendance</Tab>
                <Tab>Charges</Tab>
                <Tab>Salary</Tab>
                <Tab>Credits</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                  <TableInformation />
                </TabPanel>
                <TabPanel>
                    <div>2!</div>
                </TabPanel>
                <TabPanel>
                    <div>3!</div>
                </TabPanel>
                <TabPanel>
                    <div>4!</div>
                </TabPanel>
                <TabPanel>
                    <div>6!</div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default AccountProfileTabs;
