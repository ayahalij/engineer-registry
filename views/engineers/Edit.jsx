const React = require('react')
const Layout = require('../layouts/Layout')

function Edit (props) {
    const { _id, name, specialty, yearsExperience, available } = props.engineer

    return (
        <Layout engineer={props.engineer}>
            <h1>✏️ Edit {name}</h1>

            <form action={`/engineers/${_id}?_method=PUT&token=${props.token}`} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required defaultValue={name} />
                </div>

                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input type="text" id="specialty" name="specialty" required defaultValue={specialty} />
                </div>

                <div className="form-group">
                    <label htmlFor="yearsExperience">Years of Experience:</label>
                    <input type="number" id="yearsExperience" name="yearsExperience" defaultValue={yearsExperience} />
                </div>

                <div className="form-group">
                    <label htmlFor="available">
                        <input type="checkbox" id="available" name="available" defaultChecked={available} />
                        Available for Projects
                    </label>
                </div>

                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">💾 Update Engineer</button>
                    <a href={`/engineers/${_id}?token=${props.token}`} className="btn btn-secondary">← Back to {name}</a>
                </div>
            </form>
        </Layout>
    )
}

module.exports = Edit
