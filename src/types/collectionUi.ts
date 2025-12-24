export type HotStopProps = {
    top: string;
    left: string;
    productId: string;
};

export type CollectionItemProps = {
    id: string;
    img: string;
    name: string;
    hotspots: HotStopProps[];
}