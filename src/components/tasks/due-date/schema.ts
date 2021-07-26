import * as Yup from 'yup';

export const renameTaskValidationSchema = Yup.object().shape({
  dueDate: Yup.string().min(1).max(255).required()
});
