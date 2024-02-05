export async function validate(
   name: string,
   email: string,
   company: string,
   phone: string,
   message: string
   // serviceId: number,
) {
   const errors: {
      name?: string;
      email?: string;
      company?: string;
      phone?: string;
      message?: string;
      // serviceId?: string;
   } = {};

   if (!name) {
      errors.name = 'Name is required';
   } else if (name.length < 3) {
      errors.name = 'Name must be at least 3 characters';
   }

   if (!email) {
      errors.email = 'Email is required';
   } else if (!email.includes('@')) {
      errors.email = 'Email is invalid';
   }

   if (!company) {
      errors.company = 'Company is required';
   } else if (company.length < 3) {
      errors.company = 'Company must be at least 3 characters';
   }

   if (!phone) {
      errors.phone = 'Phone is required';
   } else if (phone.length < 3) {
      errors.phone = 'Phone must be at least 3 characters';
   }

   if (!message) {
      errors.message = 'Message is required';
   } else if (message.length < 3) {
      errors.message = 'Message must be at least 3 characters';
   }

   return Object.keys(errors).length ? errors : null;
}
