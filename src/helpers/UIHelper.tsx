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

    /**
     * return a properly structured YouTube embed url
     * @param ytVideoId
     */
    public static makeYTEmbedURL = (ytVideoId: string): string => {
        return `https://www.youtube.com/embed/${ytVideoId}?playlist=${ytVideoId}&controls=0&loop=1&modestbranding=1&autoplay=1&showinfo=0&rel=0&disablekb=1`;
    };
}

export default UIHelper;
