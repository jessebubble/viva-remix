export async function validate(data: any) {
   const errors: any = {};

   if (!data.name) {
      errors.name = 'Name is required';
   }

   if (!data.email) {
      errors.email = 'Email is required';
   }

   if (!data.message) {
      errors.message = 'Message is required';
   }

   return errors;
}
