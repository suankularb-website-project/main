import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

const themed: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    components: {
        Card: {
            headerBg: "#101010",
            colorBgContainer: "#101010",
            colorTextHeading: "#ffffff",
            algorithm: true
        },
        Pagination: {
            colorText: "#ffffff",
            colorTextDisabled: "#ffffff",
            algorithm: true
        },
        Input: {
            colorBgContainer: "#000000",
            colorBorder: "#ffffff",
            colorText: "#ffffff",
            colorTextPlaceholder: "#909090",
            algorithm: true
        },
        Menu: {
            itemBg: "#000000",
            itemActiveBg: "#101010",
            itemColor: "#ffffff",
            itemHoverColor: "#f5f5f5",
            subMenuItemBg: "#101010",
            popupBg: "#000000",
            darkSubMenuItemBg: "#101010",
            darkItemBg: "#000000",
            darkItemColor: "#ffffff",
            algorithm: true
        },
        Table: {
            headerBg: "#101010",
            headerColor: "#ffffff",
            borderColor: "#303030",
            colorBgContainer: "#050505",
            colorText: "#f9f9f9",
            algorithm: true
        },
        Form: {
            labelColor: "#ffffff",
        }
    },
};

export default themed;