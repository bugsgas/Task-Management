import Avatar from '../../components/Avatar'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

//styles
import './Project.css'

export default function ProjectSummary({project}) {
  const navigate = useNavigate()
  const {deleteDocument} = useFirestore('projects')
  const {user} = useAuthContext()

  const handleClick = (e) => {
    deleteDocument(project.id)
    //add a modal for are yu sure
    navigate('/')
  }

  return (
    <div className='project-summary'>
      <h2 className="page-title">{project.name}</h2>
      <p>By {project.createdBy.displayName}</p>
      <p className="due-">
        Project due by {project.dueDate.toDate().toDateString()}
      </p>
      <p className="details">{project.details}</p>
      <h4>Project is assigned to:</h4>
      <div className="assigned-users">
        {project.assignedUsersList.map(user => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>

      {user.uid === project.createdBy.id && (
      <div className='btn-edit'>
        <button className="btn">
          Mark as Complete
        </button>
        <button className="btn delete" onClick={handleClick}>Delete</button>
      </div>
      )}
    </div>
  )
}
