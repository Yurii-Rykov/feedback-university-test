import { useNavigate, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Section, GeneralCardList } from '../components';
import { DepartmentInfo } from 'pages';
import { removeDepartment } from 'features/departments/departmentsSlice';

function DepartmentPage() {
  const departments = useSelector(state => state.departments.departments);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDeleteCard = id => {
    dispatch(removeDepartment(id));
  };

  const handleOpenDetails = id => {
    navigate(`/departments/department/${id}`);
  };

  return (
    <Routes>
      <Route
        index
        element={
          <Section title="Факультеты" position="right">
            <GeneralCardList
              onDeleteCard={handleDeleteCard}
              onOpenDetails={handleOpenDetails}
              list={departments}
              withDetails
            />
          </Section>
        }
      />
      <Route path="department/:departmentId" element={<DepartmentInfo />} />
    </Routes>
  );
}

export default DepartmentPage;
