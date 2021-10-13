import React from "react";

class UIHelper {

    /**
     * for JumbotronContent
     * truncate overview if longer than [maxLength] characters && append a READ MORE
     * @param overview
     * @param maxLength
     */
    public static makeOverview = (overview: string, maxLength: number = 189): JSX.Element => {
        let overviewWidget: JSX.Element = <p>{overview}</p>;
        if (overview && overview.length > maxLength) {
            overviewWidget = <p>{overview.slice(0, (maxLength + 1))}
                ... <span className="nc-jumbotron-content__read-more">more</span>
            </p>;
        }

        return overviewWidget;
    };
}

export default UIHelper;
