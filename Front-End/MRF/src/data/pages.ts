class Page {
    constructor(public value: string){}
    public dictionaryLabel(): string {
        return this.value.concat(".PAGE_LABEL");
    }
    public url(): string {
        return this.value.replace("_PAGE", "").toLowerCase();
    }
}

export const pages = {
    home: new Page("HOME_PAGE"),
    ourMission: new Page("OUR_MISSION_PAGE"),
    contact: new Page("CONTACT_PAGE"),
    tours: new Page("TOURS_PAGE"),
    rentals: new Page("RENTALS_PAGE"),
    sales: new Page("SALES_PAGE"),
    faqs: new Page("FAQS_PAGE"),
    legalAdvise: new Page("LEGAL_ADVISE_PAGE"),
    privacy: new Page("PRIVACY_PAGE")
}