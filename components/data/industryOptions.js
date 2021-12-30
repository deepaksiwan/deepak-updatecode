export const industryOptions = [
  { value: '', name: '---' },
  { value: 'Advertising', name: 'Advertising' },
  {
    value: 'Aeronautics Aerospace & Defense',
    name: 'Aeronautics Aerospace & Defense',
  },
  {
    value: 'Agriculture & Allied Industries',
    name: 'Agriculture & Allied Industries',
  },
  { value: 'AI', name: 'AI' },
  { value: 'Airport Operations', name: 'Airport Operations' },
  { value: 'Analytics', name: 'Analytics' },
  { value: 'Animation', name: 'Animation' },
  { value: 'Apparel and Textiles', name: 'Apparel and Textiles' },
  {
    value: 'AR VR (Augmented + Virtual Reality)',
    name: 'AR VR (Augmented + Virtual Reality)',
  },
  {
    value: 'Architecture Interior Design',
    name: 'Architecture Interior Design',
  },
  { value: 'Art & Photography', name: 'Art & Photography' },
  { value: 'Automotive', name: 'Automotive' },
  { value: 'Banking', name: 'Banking' },
  { value: 'Biotechnology', name: 'Biotechnology' },
  { value: 'BPM', name: 'BPM' },
  { value: 'Cement', name: 'Cement' },
  { value: 'Chemicals', name: 'Chemicals' },
  { value: 'Computer Vision', name: 'Computer Vision' },
  { value: 'Construction', name: 'Construction' },
  { value: 'Consumer Durables', name: 'Consumer Durables' },
  { value: 'Dating Matrimonial', name: 'Dating Matrimonial' },
  { value: 'Design', name: 'Design' },
  { value: 'Edtech', name: 'Edtech' },
  { value: 'Education', name: 'Education' },
  {
    value: 'Electronics System Design & Manufacturing',
    name: 'Electronics System Design & Manufacturing',
  },
  { value: 'Enterprise Software', name: 'Enterprise Software' },
  {
    value: 'Engineering & Capital Goods',
    name: 'Engineering & Capital Goods',
  },
  { value: 'Events', name: 'Events' },
  { value: 'Fashion', name: 'Fashion' },
  { value: 'Finance', name: 'Finance' },
  { value: 'Fintech', name: 'Fintech' },
  { value: 'FMCG', name: 'FMCG' },
  { value: 'Food and Beverages', name: 'Food and Beverages' },
  { value: 'Government', name: 'Government' },
  { value: 'Gems & Jewellery', name: 'Gems & Jewellery' },
  { value: 'green-technology', name: 'green-technology' },
  { value: 'Healthcare & Lifesciences', name: 'Healthcare & Lifesciences' },
  { value: 'Household Services', name: 'Household Services' },
  { value: 'Horticulture', name: 'Horticulture' },
  { value: 'Human Resources', name: 'Human Resources' },
  { value: 'Indic Languages Startups', name: 'Indic Languages Startups' },
  { value: 'Internet Of Things', name: 'Internet Of Things' },
  { value: 'Insurance', name: 'Insurance' },
  { value: 'IT Services', name: 'IT Services' },
  { value: 'Logistics', name: 'Logistics' },
  { value: 'Manufacturing', name: 'Manufacturing' },
  { value: 'Marketing', name: 'Marketing' },
  { value: 'Media & Entertainment', name: 'Media & Entertainment' },
  { value: 'Metals & Mining', name: 'Metals & Mining' },
  { value: 'Nanotechnology', name: 'Nanotechnology' },
  { value: 'Natural Sciences', name: 'Natural Sciences' },
  { value: 'Non-Renewable Energy', name: 'Non-Renewable Energy' },
  { value: 'NGO', name: 'NGO' },
  { value: 'NPO', name: 'NPO' },
  {
    value: 'Other Speciality Retailers',
    name: 'Other Speciality Retailers',
  },
  { value: 'Passenger Experience', name: 'Passenger Experience' },
  { value: 'Pets & Animals', name: 'Pets & Animals' },
  { value: 'Pharmaceuticals', name: 'Pharmaceuticals' },
  {
    value: 'Professional & Commercial Services',
    name: 'Professional & Commercial Services',
  },
  { value: 'Real Estate', name: 'Real Estate' },
  { value: 'Renewable Energy', name: 'Renewable Energy' },
  { value: 'Retail', name: 'Retail' },
  { value: 'Robotics', name: 'Robotics' },
  { value: 'Rural Development', name: 'Rural Development' },
  { value: 'Safety', name: 'Safety' },
  { value: 'Security Solutions', name: 'Security Solutions' },
  { value: 'Social Solutions', name: 'Social Solutions' },
  { value: 'Social Impact', name: 'Social Impact' },
  { value: 'Social Network', name: 'Social Network' },
  { value: 'Sports', name: 'Sports' },
  { value: 'Technology Hadrware', name: 'Technology Hadrware' },
  {
    value: 'Telecommunications & Networking',
    name: 'Telecommunications & Networking',
  },
  { value: 'Toys & Games', name: 'Toys & Games' },
  { value: 'Transportation & Storage', name: 'Transportation & Storage' },
  { value: 'Travel and Tourism', name: 'Travel and Tourism' },
  { value: 'Waste Management', name: 'Waste Management' },
  { value: 'Others', name: 'Others' },
];
/*<select
                name='industry'
                required
                className='form-select'
                value={industry}
                onChange={(e) => SetIndustry(e.target.value)}
              >
                <option value=''>---</option>
                <option value='Advertising'>Advertising</option>
                <option value='Aeronnautics Aerospace &amp; Defense'>
                  Aeronnautics Aerospace &amp; Defense
                </option>
                <option value='Agriculture &amp; Allied Industries'>
                  Agriculture &amp; Allied Industries
                </option>
                <option value='AI'>AI</option>
                <option value='Airport Operations'>Airport Operations</option>
                <option value='Analytics'>Analytics</option>
                <option value='Animation'>Animation</option>
                <option value='Apparel and Textiles'>
                  Apparel and Textiles
                </option>
                <option value='AR VR (Augmented + Virtual Reality)'>
                  AR VR (Augmented + Virtual Reality)
                </option>
                <option value='Architecture Interior Design'>
                  Architecture Interior Design
                </option>
                <option value='Art &amp; Photography'>
                  Art &amp; Photography
                </option>
                <option value='Automotive'>Automotive</option>
                <option value='Banking'>Banking</option>
                <option value='Biotechnology'>Biotechnology</option>
                <option value='BPM'>BPM</option>
                <option value='Cement'>Cement</option>
                <option value='Chemicals'>Chemicals</option>
                <option value='Computer vision'>Computer vision</option>
                <option value='Construction'>Construction</option>
                <option value='Consumer Durables'>Consumer Durables</option>
                <option value='Dating matrimonial'>Dating matrimonial</option>
                <option value='Design'>Design</option>
                <option value='Edtech'>Edtech</option>
                <option value='Education'>Education</option>
                <option value='Electronics system design &amp; Manufacturing'>
                  Electronics system design &amp; Manufacturing
                </option>
                <option value='Enterprise software'>
                  Enterprise software
                </option>
                <option value='Engineering &amp; Capital Goods'>
                  Engineering &amp; Capital Goods
                </option>
                <option value='Events'>Events</option>
                <option value='Fashion'>Fashion</option>
                <option value='Finance'>Finance</option>
                <option value='Fintech'>Fintech</option>
                <option value='FMCG'>FMCG</option>
                <option value='Food and beverages'>Food and beverages</option>
                <option value='Government'>Government</option>
                <option value='Gems &amp; Jewellery'>
                  Gems &amp; Jewellery
                </option>
                <option value='Green Technology'>Green Technology</option>
                <option value='Healthcare &amp; lifesciences'>
                  Healthcare &amp; lifesciences
                </option>
                <option value='House-Hold services'>
                  House-Hold services
                </option>
                <option value='Horticulture'>Horticulture</option>
                <option value='Human resources'>Human resources</option>
                <option value='Indic languages startups'>
                  Indic languages startups
                </option>
                <option value='Internet of things'>Internet of things</option>
                <option value='Insurance'>Insurance</option>
                <option value='IT Services'>IT Services</option>
                <option value='Logistics'>Logistics</option>
                <option value='Manufacturing'>Manufacturing</option>
                <option value='Marketing'>Marketing</option>
                <option value='Media and entertainment'>
                  Media and entertainment
                </option>
                <option value='Metals &amp; Mining'>
                  Metals &amp; Mining
                </option>
                <option value='Nanotechnology'>Nanotechnology</option>
                <option value='Natural Sciences'>Natural Sciences</option>
                <option value='Non-Renewable energy'>
                  Non-Renewable energy
                </option>
                <option value='NGO'>NGO</option>
                <option value='NPO'>NPO</option>
                <option value='Other speciality retailers'>
                  Other speciality retailers
                </option>
                <option value='Passenger experience'>
                  Passenger experience
                </option>
                <option value='Pets &amp; animals'>Pets &amp; animals</option>
                <option value='Pharmaceuticals'>Pharmaceuticals</option>
                <option value='Professional &amp; Commercial services'>
                  Professional &amp; Commercial services
                </option>
                <option value='Real estate'>Real estate</option>
                <option value='Renewable energy'>Renewable energy</option>
                <option value='Retail'>Retail</option>
                <option value='Robotics'>Robotics</option>
                <option value='Rural development'>Rural development</option>
                <option value='Safety'>Safety</option>
                <option value='Security solutions'>Security solutions</option>
                <option value='Social impact'>Social impact</option>
                <option value='Social network'>Social network</option>
                <option value='Sports'>Sports</option>
                <option value='Technology hardware'>
                  Technology hardware
                </option>
                <option value='Telecommunications &amp; Networking'>
                  Telecommunications &amp; Networking
                </option>
                <option value='Toys and games'>Toys and games</option>
                <option value='Transportation &amp; Storage'>
                  Transportation &amp; Storage
                </option>
                <option value='Travel and tourism'>Travel and tourism</option>
                <option value='Waste management'>Waste management</option>
                <option value='Others'>Others</option>
              </select>*/