import React from 'react'

export default function Apply() {
  return (
    <div className="cont">
    <div id="why">WHY SHOULD<br/>
        YOU APPLY?</div>
    <br/><br/>
    <div className="apply-cont" style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        flexFlow:"wrap",
        justifyContent:"center"
    }}>
    <div className="rect">
    <p className='listhead'>GAIN</p>
    <ul>
	<li className="listitem">leadership experience</li>
	<li className="listitem">networking opportunities</li>
	<li className="listitem">a chance to enhance your resume</li>
	<li className="listitem">professional development</li>
	<li className="listitem">everlasting memories</li>
    </ul>
    </div>
    <div className="rect">
    <p className='listhead'>WIN A CHANCE TO GET</p>
    <ul>
	<li className="listitem">free pro-show passes</li>
	<li className="listitem">free fest entry passes</li>
	<li className="listitem">vip access to priority seating at select events</li>
	<li className="listitem">exclusive fest merchandise</li>
	<li className="listitem">featured on the fest’s official social media handle!</li>
    </ul>
    </div>
    <div className="rect">
    <p className='listhead'>A CHANCE TO EXPLORE</p>
    <ul>
	<li className="listitem">internship opportunities with some of our partners & associates</li>
	<li className="listitem">free online courses</li>
	<li className="listitem">internship opportunities with some of our partners & associates</li>
	<li className="listitem">free online courses</li>
	<li className="listitem">certificate of appreciation</li>
    </ul>
    </div>
    </div>
</div>

  )
}
