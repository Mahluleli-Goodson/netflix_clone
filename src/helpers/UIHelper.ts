
class UIHelper {

    /**
     * return a properly structured YouTube embed url
     * @param ytVideoId
     */
    public static makeYTEmbedURL = (ytVideoId: string): string => {
        return `https://www.youtube.com/embed/${ytVideoId}?playlist=${ytVideoId}&controls=0&loop=1&modestbranding=1&autoplay=1&showinfo=0&rel=0&disablekb=1`;
    };
}

export default UIHelper;
