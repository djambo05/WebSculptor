import { Typography, BottomNavigation, BottomNavigationAction, SvgIcon } from "@mui/material"
import { useState } from "react";

const MainFooter = () => {
    const [value, setValue] = useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <footer>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={
              <SvgIcon>
                <path d="M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12zM16 13h-4V7h-1v7h5z" />
                {/* <path fill="none" d="M0 0h24v24H0z" /> */}
              </SvgIcon>
            }
          />

          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={
              <SvgIcon>
                <path
                  d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                  stroke="#222222"
                />
              </SvgIcon>
            }
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={
              <SvgIcon>
                <path
                  clip-rule="evenodd"
                  d="M11.507 21.87C11.5073 21.8702 11.5076 21.8703 12 21L11.5076 21.8703C11.8131 22.0432 12.1869 22.0432 12.4924 21.8703L12 21C12.4924 21.8703 12.4927 21.8702 12.493 21.87L12.4937 21.8696L12.4956 21.8685L12.5017 21.865L12.5225 21.8531C12.54 21.843 12.565 21.8285 12.5968 21.8098C12.6605 21.7723 12.7518 21.7179 12.8669 21.6473C13.0968 21.5061 13.4221 21.3002 13.811 21.0366C14.5871 20.5106 15.6261 19.7487 16.6696 18.8077C16.7497 18.7356 16.8302 18.662 16.911 18.587L16.2695 17.3963C15.3896 15.957 13.806 15 11.9999 15C10.1938 15 8.61029 15.957 7.73034 17.3963L7.08901 18.5869C7.16979 18.6619 7.25029 18.7356 7.33036 18.8077C8.37393 19.7487 9.41295 20.5106 10.189 21.0366C10.5779 21.3002 10.9032 21.5061 11.1331 21.6473C11.2482 21.7179 11.3395 21.7723 11.4032 21.8098C11.435 21.8285 11.4599 21.843 11.4775 21.8531L11.4983 21.865L11.5044 21.8685L11.5063 21.8696L11.507 21.87ZM5.62848 17.081L5.9819 16.4249L5.99374 16.4029L6.00665 16.3815C7.23126 14.3569 9.45665 13 11.9999 13C14.5432 13 16.7686 14.3569 17.9932 16.3815L18.0061 16.4029L18.0179 16.4248L18.3715 17.0811C19.8 15.4269 21 13.3715 21 11.1C21 6.08596 16.9822 2 12 2C7.01776 2 3 6.08596 3 11.1C3 13.3715 4.19992 15.4268 5.62848 17.081ZM12 5.5C10.067 5.5 8.5 7.067 8.5 9C8.5 10.933 10.067 12.5 12 12.5C13.933 12.5 15.5 10.933 15.5 9C15.5 7.067 13.933 5.5 12 5.5Z"
                  fill="black"
                  fill-rule="evenodd"
                />
              </SvgIcon>
            }
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={
              <SvgIcon>
                <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-16q0-2.496-1.76-4.256t-4.224-1.76h-6.368q-0.64-1.76-2.176-2.88t-3.456-1.12h-8q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h8q0.8 0 1.408 0.608t0.576 1.408v1.984h10.016q0.8 0 1.408 0.608t0.576 1.408v16q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408z"></path>
              </SvgIcon>
            }
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
        >
          Web developer Blog. React JS MUI
        </Typography>
      </footer>
    )
}
export default MainFooter