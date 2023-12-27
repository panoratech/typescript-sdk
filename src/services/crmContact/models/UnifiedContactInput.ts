import { Email } from './Email';
import { Phone } from './Phone';

export interface UnifiedContactInput {
  /**
   * The first name of the contact
   */
  first_name: string;
  /**
   * The last name of the contact
   */
  last_name: string;
  email_addresses: Email[];
  phone_numbers: Phone[];
  field_mappings: FieldMappings;
}
interface FieldMappings {}
