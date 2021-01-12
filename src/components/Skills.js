import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className='skill-container'>
            <h1>Skills</h1>
            <div className='skill-card-container'>
                <div className='skill-card'>
                    <h2>
                        Technical skill
                    </h2>
                    <table className='skill-table'>
                        <tr>
                            <td className='skill-label'>
                                <label>Microsoft Office:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='ms-office' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Google Suite:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='skill-card'>
                    <h2>
                        Design Skills
                    </h2>
                    <table className='skill-table'>
                        <tr>
                            <td className='skill-label'>
                                <label>Adobe Illustrator:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='ms-office' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Adobe Photoshop:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Adobe Premiere Pro:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="80" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Adobe XD:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="80" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Figma:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Auto CAD:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>3D Max:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Sketch Up:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="80" max="100"></progress>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='skill-card'>
                    <h2>
                        Developer Skills
                    </h2>
                    <table className='skill-table'>
                        <tr>
                            <td className='skill-label'>
                                <label>HTML:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='ms-office' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>CSS:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Javascript:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="80" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>React js:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="80" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Express Js:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="80" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>SQL:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="100" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Firebase:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="60" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td className='skill-label'>
                                <label>Database Design:</label>
                            </td>
                            <td className='skill-progress'>
                                <progress id='google-suite' className='skill-progress-exel' value="80" max="100"></progress>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Skills
