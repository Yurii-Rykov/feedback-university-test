import { useState } from 'react';

import {
  TutorsList,
  UniversityCard,
  Paper,
  Section,
  Button,
  GeneralCardList,
  TeacherForm,
  WidgetForm,
} from '../components';
import * as Forms from '../constants/vars';
import universityData from '../constants/universityData.json';
import teacherImp from '../assets/images/teachers.png';
import citiesImg from '../assets/images/cities.png';
import facultiesImg from '../assets/images/faculties.png';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addTeacher } from '../features/tutors/tutorsSlice';
import { addCity, removeCity } from '../features/cities/citiesSlice';
import { addDepartment, removeDepartment } from 'features/departments/departmentsSlice';


function UniversityPage() {
 
  const cities  = useSelector(state => state.cities.cities);
  const departments = useSelector( state => state.departments.departments);
  const tutors = useSelector( state => state.tutors.tutors);

  const dispatch = useDispatch();
  
  const [showForm, setShowForm] = useState(null);

  const handleAddTeacher = teacher => {
    dispatch(addTeacher(teacher));
  };

  const handleAddCity = cityName => {
    dispatch(addCity(cityName));
    };

  const handleAddDepartment = departmentName => {
    dispatch(addDepartment(departmentName));
  };

  const handleShowForm = formName => {
    setShowForm(prevState => (prevState === formName ? null : formName));
  };

  const handleDeleteCard = (id, relation) => {
    relation === Forms.DEPARTMENTS_FORM &&
      dispatch(removeDepartment(id))
    relation === Forms.CITY_FORM &&
      dispatch(removeCity(id))
  };

  const handleEditCard = () => {};

  return (
    <>
      <Section title="Информация о университете" position="right">
        <div className="universityContainer">
          <UniversityCard universityName={universityData.name} />
          <Paper>
            <p className="universityDescription">
              Опыт, концентрат знаний и возможность избежать большинство ошибок
              при приеме на работу. Мы знаем, что хотят большинство локальных и
              иностранных компаний и можем вам это дать. А еще мы постоянно
              совершенствуем наши курсы программирования, добавляя туда что-то
              новое. Вы можете лично ознакомиться с историями успеха наших
              выпускников, чтобы убедиться в эффективности нашей методики
              обучения. Да, мы начнем с азов и самой простой информации. Знаем,
              что большинство людей приходят к нам с нулевыми знаниями.{' '}
            </p>
          </Paper>
        </div>
      </Section>

      <Section title="Преподаватели" img={teacherImp}>
        <TutorsList tutors={tutors} />
        {showForm === Forms.TEACHER_FORM && (
          <TeacherForm onSubmit={handleAddTeacher} />
        )}
        <Button
          name={
            showForm === Forms.TEACHER_FORM
              ? 'Закрыть форму'
              : 'Добавить преподавателя'
          }
          onClick={() => handleShowForm(Forms.TEACHER_FORM)}
        />
      </Section>

      <Section title="Города" img={citiesImg}>
        <GeneralCardList
          onDeleteCard={handleDeleteCard}
          onEditCard={handleEditCard}
          list={cities}
        />
        {showForm === Forms.CITY_FORM && (
          <WidgetForm
            title="Добавление города"
            label="Город*"
            onSubmit={handleAddCity}
          />
        )}
        <Button
          name={
            showForm === Forms.CITY_FORM ? 'Закрыть форму' : 'Добавить город'
          }
          onClick={() => handleShowForm(Forms.CITY_FORM)}
        />
      </Section>

      <Section title="факультеты" img={facultiesImg}>
        <GeneralCardList
          onDeleteCard={handleDeleteCard}
          onEditCard={handleEditCard}
          list={departments}
        />
        {showForm === Forms.DEPARTMENTS_FORM && (
          <WidgetForm
            title="Добавление филиала"
            label="Филиал*"
            onSubmit={handleAddDepartment}
          />
        )}
        <Button
          name={
            showForm === Forms.DEPARTMENTS_FORM
              ? 'Закрыть форму'
              : 'Добавить факультет'
          }
          onClick={() => handleShowForm(Forms.DEPARTMENTS_FORM)}
        />
      </Section>
    </>
  );
}

export default UniversityPage;
