const React = require('react')
const Layout = require('../layouts/Layout')

function Show (props) {
    const { engineer, token } = props
    return (
        <Layout engineer={engineer}>
            <h1>👷 {engineer.name}</h1>

            <div className="engineer-card">
                <div><strong>Specialty:</strong> {engineer.specialty}</div>
                <div><strong>Experience:</strong> {engineer.yearsExperience} years</div>
                <div className={`engineer-status ${engineer.available ? 'ready' : 'not-ready'}`}>
                    {engineer.available ? '✅ Available' : '❌ Not Available'}
                </div>

                <div className="mt-3 mb-3">
                    <a href={`/engineers?token=${token}`} className="btn btn-secondary">← Back to All Engineers</a>
                    <a href={`/engineers/${engineer._id}/edit?token=${token}`} className="btn btn-primary">✏️ Edit Engineer</a>
                </div>

                <form action={`/engineers/${engineer._id}?_method=DELETE&token=${token}`} method="POST">
                    <button type="submit" className="btn btn-danger">🗑️ Delete Engineer</button>
                </form>
            </div>
        </Layout>
    )
}

module.exports = Show
