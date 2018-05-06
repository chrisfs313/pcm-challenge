export class ConsumerTableBackend {
    public readonly ListActivesByBusiness: string = "/consumerTable/listActivesByBusiness/";
}

export class Constants {
    public static readonly WS_BASE_PATH: string = "https://ws-pcm-challenge.herokuapp.com";
    
    public static readonly REST_ConsumerTable: ConsumerTableBackend = new ConsumerTableBackend();
}