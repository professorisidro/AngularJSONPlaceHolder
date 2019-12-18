import { Company } from './Company';
import { Address } from './Address';

export class User{
    public id: number;
    public name: string;
    public username: string;
    public phone: string;
    public website: string;
    public address: Address;
    public company: Company;
}