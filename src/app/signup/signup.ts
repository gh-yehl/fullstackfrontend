export class Signup {
    constructor(
        public roleTypes: string[],
        public role:string,
        public userName: string,
        public password: string,
        public email: string,

        public timeZones: string[],
        public timeZoneSelected: string,
        public signup_startTime: string,
        public signup_endTime: string,
        public technologiesSelected: string,

        public linkedinURL: string,
        public yearsList: string[],
        public workingYears: string,
        public contactNumber: string
    ) {}
}