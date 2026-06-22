import "../styles/EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">
      <h2>No Tasks Yet!</h2>
      <p>Add your first task to get started.</p>
    </div>
  );
}

export default EmptyState;