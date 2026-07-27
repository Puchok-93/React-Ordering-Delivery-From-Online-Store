import type { TTabs } from "../../types/tabs";
import type { TTabType } from "../../types/tabs";
import Tab from "./tab";

type TTabsProps = {
    tabs: TTabs;
    activeTab: 'pickup' | 'delivery';
    onChange: (tab: TTabType) => void;
}

function Tabs({tabs, activeTab, onChange}: TTabsProps) {
    return(
        <div className="tabs-block">
            <h2>Выберите способ получения товара</h2>
            <div className="tabs-block__tabs">
                {
                    tabs.map(({ data, label }) => (
                        <Tab 
                            key={data}
                            data={data} 
                            label={label}
                            isActive={activeTab === data}
                            onClick={() => onChange(data)}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Tabs;