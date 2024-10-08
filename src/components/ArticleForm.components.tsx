import React from 'react';
import { useFormContext, SubmitHandler } from 'react-hook-form';
import CustomInput from '../components/myInput.components';
import CustomSelect from '../components/customSelect.components';
import areaOptionsSelect from '../constantes/area-select';
import { ICreateMealForm } from '../interfaces/meal.interface';

interface ArticleFormProps {
  onSubmit: SubmitHandler<ICreateMealForm>;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ onSubmit }) => {
  const { handleSubmit, register, formState: { isValid } } = useFormContext<ICreateMealForm>(); // Access the form's validation state

  const onSubmitForm: SubmitHandler<ICreateMealForm> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="p-4">
        <CustomInput
          label="Article Name"
          name="name"
          type="text"
          register={register}
          required
        />
        <CustomInput
          label="Article Description"
          name="description"
          type="text"
          register={register}
          required
        />
        <CustomInput
          label="Article Preparation"
          name="preparation"
          type="textarea"
          register={register}
          required
        />
        <CustomSelect
          label="Area"
          name="area"
          register={register}
          options={areaOptionsSelect}
          required
        />
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className={`bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 ${
              !isValid ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isValid}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default ArticleForm;
