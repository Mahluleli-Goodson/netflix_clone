import React, {FC} from 'react';

interface IOverview {
    overview: string;
    maxLength?: number;
    onWatch: Function;
    showId: number;
}

/**
 * for JumbotronContent
 * truncate overview if longer than [maxLength] characters && append a READ MORE
 * @param overview
 * @param maxLength
 * @param onWatch
 * @param showId
 * @constructor
 */
const Overview: FC<IOverview> = ({overview, maxLength = 189, onWatch, showId}: IOverview) => {

    let overviewWidget: JSX.Element = <p>{overview}</p>;

    if (overview && overview.length > maxLength) {
        overviewWidget = <p>{overview.slice(0, (maxLength + 1))}
            ... <span onClick={() => onWatch(showId)} className="nc-jumbotron-content__read-more">more</span>
        </p>;
    }

    return (
        <section className="md:text-[1.2rem] font-light transition-all">{overviewWidget}</section>
    );
};

export default Overview;
