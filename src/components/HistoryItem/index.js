import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistoryItem = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="history-intro-container">
        <div className="history-intro">
          <img src={logoUrl} alt="domain logo" className="logo-url" />
          <div className="title-and-domain-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteHistoryItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
