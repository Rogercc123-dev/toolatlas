const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const ASSET = path.join(DIST, 'assets');
fs.rmSync(DIST, {recursive:true, force:true});
fs.mkdirSync(ASSET, {recursive:true});

const categories = {
  finance: 'Finance',
  education: 'Education',
  travel: 'Travel',
  health: 'Health & Wellness',
  engineering: 'Engineering',
  math: 'Math',
  everyday: 'Everyday',
  work: 'Work',
  conversion: 'Converters',
};

const tools = [];
const add = (slug,title,category,kind,description,fields=[]) => tools.push({slug,title,category,kind,description,fields});

// Core calculators
add('percentage-calculator','Percentage Calculator','math','percentage','Calculate percentages, percentage change and percentage differences quickly.');
add('percentage-increase-calculator','Percentage Increase Calculator','math','percent-increase','Calculate the percentage increase between two values.');
add('percentage-decrease-calculator','Percentage Decrease Calculator','math','percent-decrease','Calculate the percentage decrease between two values.');
add('discount-calculator','Discount Calculator','finance','discount','Calculate sale prices, discounts and savings instantly.');
add('markup-calculator','Markup Calculator','finance','markup','Calculate markup, selling price and gross profit from cost.');
add('margin-calculator','Profit Margin Calculator','finance','margin','Calculate gross profit margin from revenue and costs.');
add('tip-calculator','Tip Calculator','everyday','tip','Calculate a tip and split the bill between any number of people.');
add('split-bill-calculator','Split Bill Calculator','everyday','split-bill','Split a restaurant or group bill evenly, including tip.');
add('age-calculator','Age Calculator','everyday','age','Calculate exact age in years, months and days.');
add('date-difference-calculator','Date Difference Calculator','everyday','date-diff','Calculate the exact time between two dates.');
add('days-between-dates','Days Between Dates Calculator','everyday','date-diff','Find how many days are between two calendar dates.');
add('time-duration-calculator','Time Duration Calculator','everyday','time-duration','Calculate elapsed time between two clock times.');
add('hours-to-minutes','Hours to Minutes Converter','conversion','hours-minutes','Convert hours and decimal hours to minutes.');
add('minutes-to-hours','Minutes to Hours Converter','conversion','minutes-hours','Convert minutes to hours and decimal hours.');
add('celsius-to-fahrenheit','Celsius to Fahrenheit Converter','conversion','temp-cf','Convert Celsius temperatures to Fahrenheit.');
add('fahrenheit-to-celsius','Fahrenheit to Celsius Converter','conversion','temp-fc','Convert Fahrenheit temperatures to Celsius.');
add('km-to-miles','Kilometers to Miles Converter','conversion','km-miles','Convert kilometers to miles.');
add('miles-to-km','Miles to Kilometers Converter','conversion','miles-km','Convert miles to kilometers.');
add('kg-to-lbs','Kilograms to Pounds Converter','conversion','kg-lbs','Convert kilograms to pounds.');
add('lbs-to-kg','Pounds to Kilograms Converter','conversion','lbs-kg','Convert pounds to kilograms.');
add('cm-to-inches','Centimeters to Inches Converter','conversion','cm-in','Convert centimeters to inches.');
add('inches-to-cm','Inches to Centimeters Converter','conversion','in-cm','Convert inches to centimeters.');
add('meters-to-feet','Meters to Feet Converter','conversion','m-ft','Convert meters to feet.');
add('feet-to-meters','Feet to Meters Converter','conversion','ft-m','Convert feet to meters.');
add('liters-to-gallons','Liters to Gallons Converter','conversion','l-gal','Convert liters to US gallons.');
add('gallons-to-liters','Gallons to Liters Converter','conversion','gal-l','Convert US gallons to liters.');
add('psi-to-bar','PSI to Bar Converter','engineering','psi-bar','Convert pressure from PSI to bar.');
add('bar-to-psi','Bar to PSI Converter','engineering','bar-psi','Convert pressure from bar to PSI.');
add('watts-to-kwh','Watts to kWh Calculator','engineering','watts-kwh','Estimate energy use from power and runtime.');
add('ohms-law-calculator','Ohm’s Law Calculator','engineering','ohms','Calculate voltage, current, resistance or power using Ohm’s law.');
add('power-calculator','Electrical Power Calculator','engineering','power','Calculate electrical power from voltage and current.');
add('torque-calculator','Torque Calculator','engineering','torque','Calculate torque from force and lever arm.');
add('speed-distance-time','Speed Distance Time Calculator','engineering','sdt','Solve for speed, distance or time.');
add('density-calculator','Density Calculator','engineering','density','Calculate density, mass or volume.');
add('force-calculator','Force Calculator','engineering','force','Calculate force using mass and acceleration.');
add('pressure-calculator','Pressure Calculator','engineering','pressure','Calculate pressure from force and area.');
add('kinetic-energy-calculator','Kinetic Energy Calculator','engineering','kinetic','Calculate kinetic energy from mass and velocity.');
add('potential-energy-calculator','Potential Energy Calculator','engineering','potential','Calculate gravitational potential energy.');
add('momentum-calculator','Momentum Calculator','engineering','momentum','Calculate linear momentum from mass and velocity.');
add('projectile-motion-calculator','Projectile Motion Calculator','engineering','projectile','Estimate projectile range, flight time and maximum height.');
add('rocket-delta-v-calculator','Rocket Delta-V Calculator','engineering','rocket-dv','Calculate ideal rocket delta-v using the rocket equation.');
add('thrust-to-weight-calculator','Thrust to Weight Ratio Calculator','engineering','twr','Calculate thrust-to-weight ratio for rockets, aircraft and vehicles.');

// Finance
add('simple-interest-calculator','Simple Interest Calculator','finance','simple-interest','Calculate simple interest and total amount.');
add('compound-interest-calculator','Compound Interest Calculator','finance','compound','Calculate compound growth with regular contributions.');
add('loan-payment-calculator','Loan Payment Calculator','finance','loan','Estimate monthly loan payments from rate and term.');
add('mortgage-calculator','Mortgage Calculator','finance','mortgage','Estimate monthly mortgage payments and total interest.');
add('rent-affordability-calculator','Rent Affordability Calculator','finance','rent-afford','Estimate a comfortable monthly rent from income.');
add('savings-goal-calculator','Savings Goal Calculator','finance','savings-goal','Estimate how much to save each month to reach a goal.');
add('compound-growth-calculator','Investment Growth Calculator','finance','investment-growth','Estimate future value from an initial amount, return and contributions.');
add('roi-calculator','ROI Calculator','finance','roi','Calculate return on investment and ROI percentage.');
add('break-even-calculator','Break Even Calculator','finance','breakeven','Calculate the sales volume required to break even.');
add('hourly-to-salary','Hourly to Salary Calculator','work','hourly-salary','Convert an hourly wage into annual, monthly and weekly pay.');
add('salary-to-hourly','Salary to Hourly Calculator','work','salary-hourly','Convert annual salary into an hourly equivalent.');
add('overtime-calculator','Overtime Pay Calculator','work','overtime','Estimate overtime pay from hourly wage and overtime hours.');
add('holiday-pay-calculator','Holiday Pay Calculator','work','holiday-pay','Estimate holiday pay from hourly or average weekly earnings.');
add('freelance-rate-calculator','Freelance Rate Calculator','work','freelance','Estimate a freelance hourly rate from desired income and billable time.');

// Education
add('gpa-calculator','GPA Calculator','education','gpa','Calculate weighted or unweighted GPA from grades and credits.');
add('grade-calculator','Grade Calculator','education','grade','Calculate current grade and required exam score.');
add('final-grade-calculator','Final Grade Calculator','education','final-grade','Calculate the final exam score needed to reach a target grade.');
add('weighted-grade-calculator','Weighted Grade Calculator','education','weighted-grade','Calculate a weighted course grade from assignments and weights.');
add('study-hours-calculator','Study Hours Calculator','education','study-hours','Plan weekly study time across subjects and deadlines.');
add('exam-countdown','Exam Countdown Calculator','education','countdown','Calculate the days remaining until an exam date.');
add('caopercent-calculator','CAO Points Percentage Calculator','education','cao-percent','Convert a target CAO points goal into a percentage-style planning target.');
add('ucas-tariff-calculator','UCAS Tariff Calculator','education','ucas','Estimate UCAS Tariff points from common qualification grades.');
add('a-level-grade-calculator','A-Level Grade Calculator','education','grade','Estimate an A-level percentage grade from marks.');
add('gcse-grade-calculator','GCSE Grade Calculator','education','grade','Estimate GCSE grade boundaries from a raw score input.');

// Travel
add('fuel-cost-calculator','Fuel Cost Calculator','travel','fuel','Calculate fuel required and total trip cost.');
add('fuel-economy-calculator','Fuel Economy Calculator','travel','fuel-economy','Calculate fuel economy in mpg or L/100km.');
add('trip-cost-calculator','Road Trip Cost Calculator','travel','trip-cost','Estimate road trip cost including fuel, tolls and accommodation.');
add('driving-time-calculator','Driving Time Calculator','travel','drive-time','Calculate travel time from distance and average speed.');
add('pace-calculator','Pace Calculator','travel','pace','Calculate running pace, speed and race finish time.');
add('running-time-calculator','Running Time Calculator','travel','run-time','Estimate finish time from distance and pace.');
add('flight-time-calculator','Flight Time Calculator','travel','flight-time','Estimate flight duration from distance and average cruising speed.');
add('jet-lag-calculator','Jet Lag Calculator','travel','jetlag','Estimate adjustment time after crossing time zones.');
add('travel-budget-calculator','Travel Budget Calculator','travel','travel-budget','Plan a trip budget for transport, accommodation, food and activities.');
add('currency-converter','Currency Converter','travel','currency','Convert between currencies using a manually entered exchange rate.');

// Health / general wellness calculators (non-diagnostic)
add('bmi-calculator','BMI Calculator','health','bmi','Calculate body mass index from height and weight.');
add('bmr-calculator','BMR Calculator','health','bmr','Estimate basal metabolic rate using a standard formula.');
add('calorie-calculator','Daily Calorie Calculator','health','calories','Estimate daily calorie needs from age, height, weight and activity.');
add('body-fat-calculator','Body Fat Percentage Calculator','health','body-fat','Estimate body fat percentage using a common circumference-based method.');
add('water-intake-calculator','Water Intake Calculator','health','water','Estimate a daily hydration target from body weight and activity.');
add('sleep-calculator','Sleep Calculator','health','sleep','Explore sleep/wake timing based on a target bedtime or wake time.');

// Duplicate useful variants to rapidly build a large library while retaining distinct search intent.
const variants = [
  ['weekly','Weekly'],['monthly','Monthly'],['daily','Daily'],['annual','Annual'],['student','Student'],['beginner','Beginner'],['advanced','Advanced'],['small-business','Small Business'],['freelance','Freelance'],['part-time','Part-Time'],['2026','2026'],['2027','2027']
];
const baseForVariants = [
  ['salary','Salary Calculator','finance','salary','Calculate gross and net salary planning figures.'],
  ['budget','Budget Calculator','finance','budget','Build a simple income and expense budget.'],
  ['discount','Discount Calculator','finance','discount','Calculate original price, discount and sale price.'],
  ['loan','Loan Calculator','finance','loan','Estimate loan payments, interest and total repayment.'],
  ['savings','Savings Calculator','finance','compound','Estimate how savings can grow over time.'],
  ['fuel-cost','Fuel Cost Calculator','travel','fuel','Estimate fuel volume and trip cost.'],
  ['pace','Pace Calculator','travel','pace','Calculate running pace and finish time.'],
  ['grade','Grade Calculator','education','grade','Calculate grades, weights and target scores.'],
  ['hours','Hours Calculator','work','hours','Calculate work hours, overtime and time totals.'],
  ['percent','Percentage Calculator','math','percentage','Calculate percentage, change and proportion.'],
  ['unit-price','Unit Price Calculator','everyday','unit-price','Compare the price of products by unit.'],
  ['electricity','Electricity Cost Calculator','engineering','electricity','Estimate electricity costs from power, usage and tariff.'],
  ['paint','Paint Calculator','everyday','paint','Estimate paint required for a room or surface.'],
  ['flooring','Flooring Calculator','everyday','flooring','Estimate flooring area and material needed.'],
  ['concrete','Concrete Calculator','engineering','concrete','Estimate concrete volume from dimensions.'],
  ['square-footage','Square Footage Calculator','everyday','area','Calculate area from common room dimensions.'],
  ['volume','Volume Calculator','math','volume','Calculate volume for common geometric shapes.'],
  ['triangle','Triangle Calculator','math','triangle','Calculate triangle area and missing sides with common inputs.'],
  ['circle','Circle Calculator','math','circle','Calculate radius, diameter, circumference and area.'],
  ['fraction','Fraction Calculator','math','fraction','Add, subtract, multiply and divide fractions.'],
];
for(const [base,title,cat,kind,desc] of baseForVariants){
  for(const [suffix,label] of variants){
    add(`${base}-${suffix}`,`${label} ${title}`,cat,kind,`${label} ${desc}`);
  }
}

// More engineering variations
const eng = [
 ['acceleration','Acceleration Calculator','accel','Calculate acceleration from change in velocity and time.'],
 ['velocity','Velocity Calculator','velocity','Calculate velocity from distance and time.'],
 ['work','Mechanical Work Calculator','work','Calculate mechanical work from force and displacement.'],
 ['power-mechanical','Mechanical Power Calculator','mech-power','Calculate mechanical power from work and time.'],
 ['frequency','Frequency Calculator','frequency','Calculate frequency from period or cycle time.'],
 ['wavelength','Wavelength Calculator','wavelength','Calculate wavelength from frequency and wave speed.'],
 ['resistor-series','Series Resistor Calculator','res-series','Calculate equivalent resistance for series resistors.'],
 ['resistor-parallel','Parallel Resistor Calculator','res-parallel','Calculate equivalent resistance for parallel resistors.'],
 ['gear-ratio','Gear Ratio Calculator','gear','Calculate gear ratio, output speed and torque.'],
 ['belt-speed','Belt Speed Calculator','belt','Calculate belt speed from pulley diameter and RPM.'],
 ['rpm-speed','RPM to Speed Calculator','rpm-speed','Estimate linear speed from wheel size and RPM.'],
 ['twr','Thrust to Weight Calculator','twr','Calculate thrust-to-weight ratio.'],
 ['rocket-stage','Rocket Mass Ratio Calculator','rocket-stage','Estimate mass ratio and ideal delta-v for a rocket stage.'],
 ['reynolds-number','Reynolds Number Calculator','reynolds','Calculate Reynolds number from flow conditions.'],
 ['mach-number','Mach Number Calculator','mach','Convert speed to Mach number using a supplied speed of sound.'],
];
for(const [slug,title,kind,desc] of eng)add(slug,title,'engineering',kind,desc);

// Remove duplicates by slug and cap at a large but manageable library.
const unique = [...new Map(tools.map(t=>[t.slug,t])).values()];

const runtime = `const $=s=>document.querySelector(s);const fields=el=>Object.fromEntries([...el.querySelectorAll('[data-key]')].map(i=>[i.dataset.key,Number(i.value)||0]));\nfunction calc(kind,v){switch(kind){case 'percentage':return {answer:v.a*v.b/100,text:`${'${v.a}'}% of ${'${v.b}'} = ${'${(v.a*v.b/100).toFixed(2)}'}`};case 'percent-increase':return {answer:((v.b-v.a)/v.a)*100,text:`Increase: ${'${(((v.b-v.a)/v.a)*100).toFixed(2)}'}%`};case 'percent-decrease':return {answer:((v.a-v.b)/v.a)*100,text:`Decrease: ${'${(((v.a-v.b)/v.a)*100).toFixed(2)}'}%`};case 'discount':return {answer:v.a*(1-v.b/100),text:`Sale price: ${'${(v.a*(1-v.b/100)).toFixed(2)}'} · Save ${'${(v.a*v.b/100).toFixed(2)}'}`};case 'tip':return {answer:v.a*(1+v.b/100)/Math.max(1,v.c),text:`Per person: ${'${(v.a*(1+v.b/100)/Math.max(1,v.c)).toFixed(2)}'}`};case 'split-bill':return {answer:v.a/Math.max(1,v.b),text:`Each person: ${'${(v.a/Math.max(1,v.b)).toFixed(2)}'}`};case 'margin':return {answer:((v.a-v.b)/v.a)*100,text:`Margin: ${'${(((v.a-v.b)/v.a)*100).toFixed(2)}'}%`};case 'markup':return {answer:v.a*(1+v.b/100),text:`Selling price: ${'${(v.a*(1+v.b/100)).toFixed(2)}'}`};case 'simple-interest':return {answer:v.a*(1+v.b*v.c/100),text:`Total: ${'${(v.a*(1+v.b*v.c/100)).toFixed(2)}'}`};case 'compound':{const n=Math.max(1,v.d);const x=v.a*Math.pow(1+v.b/100/n,n*v.c);return {answer:x,text:`Future value: ${'${x.toFixed(2)}'}`};}case 'loan':case 'mortgage':{const r=v.b/100/12,n=v.c*12,p=r? v.a*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1):v.a/n;return {answer:p,text:`Monthly payment: ${'${p.toFixed(2)}'}`};}case 'hourly-salary':return {answer:v.a*v.b*v.c,text:`Annual gross: ${'${(v.a*v.b*v.c).toFixed(2)}'}`};case 'salary-hourly':return {answer:v.a/(v.b*v.c),text:`Hourly equivalent: ${'${(v.a/(v.b*v.c)).toFixed(2)}'}`};case 'fuel':case 'fuel-cost':return {answer:(v.a/100*v.b)*v.c,text:`Fuel cost: ${'${((v.a/100*v.b)*v.c).toFixed(2)}'}`};case 'fuel-economy':return {answer:(v.a/v.b)*100,text:`L/100km: ${'${((v.a/v.b)*100).toFixed(2)}'}`};case 'km-miles':return {answer:v.a*0.621371,text:`Miles: ${'${(v.a*0.621371).toFixed(3)}'}`};case 'miles-km':return {answer:v.a*1.609344,text:`Kilometers: ${'${(v.a*1.609344).toFixed(3)}'}`};case 'kg-lbs':return {answer:v.a*2.2046226218,text:`Pounds: ${'${(v.a*2.2046226218).toFixed(3)}'}`};case 'lbs-kg':return {answer:v.a*0.45359237,text:`Kilograms: ${'${(v.a*0.45359237).toFixed(3)}'}`};case 'cm-in':return {answer:v.a/2.54,text:`Inches: ${'${(v.a/2.54).toFixed(3)}'}`};case 'in-cm':return {answer:v.a*2.54,text:`Centimeters: ${'${(v.a*2.54).toFixed(3)}'}`};case 'm-ft':return {answer:v.a*3.280839895,text:`Feet: ${'${(v.a*3.280839895).toFixed(3)}'}`};case 'ft-m':return {answer:v.a/3.280839895,text:`Meters: ${'${(v.a/3.280839895).toFixed(3)}'}`};case 'temp-cf':return {answer:v.a*9/5+32,text:`Fahrenheit: ${'${(v.a*9/5+32).toFixed(2)}°F'}`};case 'temp-fc':return {answer:(v.a-32)*5/9,text:`Celsius: ${'${((v.a-32)*5/9).toFixed(2)}°C'}`};case 'l-gal':return {answer:v.a*0.264172052,text:`US gallons: ${'${(v.a*0.264172052).toFixed(3)}'}`};case 'gal-l':return {answer:v.a*3.785411784,text:`Liters: ${'${(v.a*3.785411784).toFixed(3)}'}`};case 'psi-bar':return {answer:v.a*0.0689475729,text:`Bar: ${'${(v.a*0.0689475729).toFixed(3)}'}`};case 'bar-psi':return {answer:v.a*14.5037738,text:`PSI: ${'${(v.a*14.5037738).toFixed(2)}'}`};case 'ohms':{if(v.a&&v.b)return {answer:v.a/v.b,text:`Voltage: ${'${(v.a/v.b).toFixed(3)}'} V`};if(v.a&&v.c)return {answer:v.a*v.c,text:`Current: ${'${(v.a*v.c).toFixed(3)}'} A`};return {answer:v.b&&v.c?v.b*v.c:0,text:'Power / resistance result'};}case 'power':return {answer:v.a*v.b,text:`Power: ${'${(v.a*v.b).toFixed(3)}'} W`};case 'torque':return {answer:v.a*v.b,text:`Torque: ${'${(v.a*v.b).toFixed(3)}'} N·m`};case 'sdt':return {answer:v.a/v.b,text:`Speed: ${'${(v.a/v.b).toFixed(3)}'}`};case 'density':return {answer:v.a/v.b,text:`Density: ${'${(v.a/v.b).toFixed(3)}'}`};case 'force':return {answer:v.a*v.b,text:`Force: ${'${(v.a*v.b).toFixed(3)}'} N`};case 'pressure':return {answer:v.a/v.b,text:`Pressure: ${'${(v.a/v.b).toFixed(3)}'} Pa`};case 'kinetic':return {answer:0.5*v.a*v.b*v.b,text:`Kinetic energy: ${'${(0.5*v.a*v.b*v.b).toFixed(3)}'} J`};case 'potential':return {answer:v.a*9.80665*v.b,text:`Potential energy: ${'${(v.a*9.80665*v.b).toFixed(3)}'} J`};case 'momentum':return {answer:v.a*v.b,text:`Momentum: ${'${(v.a*v.b).toFixed(3)}'} kg·m/s`};case 'projectile':{const a=v.a*Math.PI/180,t=v.c,g=9.80665;const range=v.b*Math.cos(a)*t,height=v.b*Math.sin(a)*t-0.5*g*t*t;return {answer:range,text:`Range estimate: ${'${range.toFixed(2)}'} · Height: ${'${height.toFixed(2)}'}`};}case 'rocket-dv':return {answer:v.c*Math.log(v.a/v.b),text:`Ideal delta-v: ${'${(v.c*Math.log(v.a/v.b)).toFixed(2)}'} m/s`};case 'twr':return {answer:v.a/(v.b*9.80665),text:`T/W ratio: ${'${(v.a/(v.b*9.80665)).toFixed(2)}'`};case 'bmi':return {answer:v.a/((v.b/100)**2),text:`BMI: ${'${(v.a/((v.b/100)**2)).toFixed(1)}'}`};case 'bmr':return {answer:10*v.a+6.25*v.b-5*v.c+5,text:`Estimated BMR: ${'${(10*v.a+6.25*v.b-5*v.c+5).toFixed(0)}'} kcal/day`};case 'calories':return {answer:(10*v.a+6.25*v.b-5*v.c+5)*v.d,text:`Estimated daily calories: ${'${((10*v.a+6.25*v.b-5*v.c+5)*v.d).toFixed(0)}'}`};case 'roi':return {answer:((v.b-v.a)/v.a)*100,text:`ROI: ${'${(((v.b-v.a)/v.a)*100).toFixed(2)}'}%`};case 'breakeven':return {answer:v.a/(v.b-v.c),text:`Break-even units: ${'${(v.a/(v.b-v.c)).toFixed(2)}'}`};case 'pace':return {answer:v.b*60/v.a,text:`Pace: ${'${(v.b*60/v.a).toFixed(2)}'} min/km`};case 'run-time':return {answer:v.a*v.b,text:`Finish time: ${'${(v.a*v.b).toFixed(2)}'} minutes`};case 'date-diff':return {answer:Math.abs(new Date(v.a).getTime()-new Date(v.b).getTime())/86400000,text:`Days: ${'${(Math.abs(new Date(v.a).getTime()-new Date(v.b).getTime())/86400000).toFixed(0)}'}`};case 'hours-minutes':return {answer:v.a*60,text:`Minutes: ${'${(v.a*60).toFixed(2)}'}`};case 'minutes-hours':return {answer:v.a/60,text:`Hours: ${'${(v.a/60).toFixed(2)}'}`};case 'accel':return {answer:(v.a-v.b)/v.c,text:`Acceleration: ${'${((v.a-v.b)/v.c).toFixed(3)}'}`};case 'velocity':return {answer:v.a/v.b,text:`Velocity: ${'${(v.a/v.b).toFixed(3)}'}`};case 'work':return {answer:v.a*v.b,text:`Work: ${'${(v.a*v.b).toFixed(3)}'} J`};case 'mech-power':return {answer:v.a/v.b,text:`Power: ${'${(v.a/v.b).toFixed(3)}'} W`};case 'frequency':return {answer:1/v.a,text:`Frequency: ${'${(1/v.a).toFixed(3)}'} Hz`};case 'wavelength':return {answer:v.a/v.b,text:`Wavelength: ${'${(v.a/v.b).toFixed(3)}'} m`};case 'res-series':return {answer:v.a+v.b+v.c,text:`Equivalent resistance: ${'${(v.a+v.b+v.c).toFixed(3)}'} Ω`};case 'res-parallel':return {answer:1/(1/v.a+1/v.b+1/v.c),text:`Equivalent resistance: ${'${(1/(1/v.a+1/v.b+1/v.c)).toFixed(3)}'} Ω`};case 'gear':return {answer:v.a/v.b,text:`Gear ratio: ${'${(v.a/v.b).toFixed(3)}'}`};case 'belt':return {answer:Math.PI*v.a*v.b/60,text:`Belt speed: ${'${(Math.PI*v.a*v.b/60).toFixed(3)} m/s'}`};case 'rpm-speed':return {answer:Math.PI*v.a*v.b/60,text:`Linear speed: ${'${(Math.PI*v.a*v.b/60).toFixed(3)} m/s'}`};default:return {answer:v.a||0,text:`Result: ${'${(v.a||0).toFixed(3)}'}`};}}
function run(){const form=$('#calc');form.addEventListener('submit',e=>{e.preventDefault();const out=calc(form.dataset.kind,fields(form));$('#result').textContent=out.text;$('#result').classList.add('show')});}
run();`;

const css = `:root{--bg:#07111a;--panel:#0b1823;--line:#203644;--text:#f4fbff;--muted:#91a6b3;--accent:#66e7ff;--lime:#baff55}*{box-sizing:border-box}html,body{margin:0;background:radial-gradient(circle at 50% -10%,#123149 0,#07111a 48%);color:var(--text);font-family:Inter,ui-sans-serif,system-ui,sans-serif}body{min-height:100vh}.wrap{max-width:1180px;margin:auto;padding:24px}.nav{display:flex;align-items:center;justify-content:space-between;padding:12px 0 28px}.brand{font-size:25px;font-weight:1000;letter-spacing:-.08em}.brand span{color:var(--accent)}.search{width:min(420px,46vw);background:#08151f;border:1px solid var(--line);padding:11px 13px;border-radius:11px;color:#fff;outline:none}.hero{padding:30px 0}.eyebrow{color:var(--accent);font-size:11px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.hero h1{font-size:clamp(38px,7vw,78px);line-height:.93;max-width:900px;margin:12px 0;letter-spacing:-.06em}.hero p{color:var(--muted);max-width:700px;font-size:16px;line-height:1.55}.tools{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-top:28px}.tool{display:block;text-decoration:none;color:inherit;background:#091721cc;border:1px solid #ffffff12;border-radius:14px;padding:16px;transition:.15s}.tool:hover{transform:translateY(-2px);border-color:#66e7ff55;background:#0c1d29}.tag{font-size:8px;color:var(--accent);font-weight:900;text-transform:uppercase;letter-spacing:.12em}.tool h3{margin:7px 0 6px;font-size:16px}.tool p{margin:0;color:var(--muted);font-size:11px;line-height:1.45}.crumb{color:var(--muted);font-size:11px;margin:10px 0 26px}.page{max-width:820px;padding-bottom:80px}.page h1{font-size:46px;letter-spacing:-.05em;margin:8px 0}.page .desc{color:var(--muted);line-height:1.6}.calc{margin-top:24px;background:#091822;border:1px solid var(--line);border-radius:16px;padding:18px}.fields{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px}.field label{display:block;font-size:9px;color:var(--muted);font-weight:900;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px}.field input{width:100%;padding:12px;background:#050d13;border:1px solid #29404f;color:#fff;border-radius:9px}.submit{margin-top:14px;border:0;border-radius:10px;padding:12px 15px;background:var(--accent);color:#031018;font-weight:1000;cursor:pointer}.result{display:none;margin-top:14px;border-radius:12px;padding:16px;background:#0d2230;border:1px solid #66e7ff33;color:#fff;font-size:20px;font-weight:900}.result.show{display:block}.note{margin-top:25px;color:var(--muted);font-size:11px;line-height:1.6}.footer{border-top:1px solid #ffffff10;margin-top:50px;padding:25px 0;color:var(--muted);font-size:10px}@media(max-width:700px){.wrap{padding:15px}.search{width:55vw}.nav{gap:10px}.hero h1{font-size:45px}.page h1{font-size:36px}}
`;
fs.writeFileSync(path.join(ASSET,'style.css'),css);
fs.writeFileSync(path.join(ASSET,'runtime.js'),runtime);

function fieldsFor(kind){
 const map={
  percentage:[['a','Percent'],['b','Value']], 'percent-increase':[['a','Original value'],['b','New value']], 'percent-decrease':[['a','Original value'],['b','New value']],
  discount:[['a','Original price'],['b','Discount %']], markup:[['a','Cost'],['b','Markup %']], margin:[['a','Revenue'],['b','Cost']], tip:[['a','Bill'],['b','Tip %'],['c','People']], 'split-bill':[['a','Bill'],['b','People']],
  'simple-interest':[['a','Principal'],['b','Rate %'],['c','Years']], compound:[['a','Initial amount'],['b','Annual rate %'],['c','Years'],['d','Compounds/year']], loan:[['a','Loan amount'],['b','Interest %'],['c','Years']], mortgage:[['a','Mortgage amount'],['b','Interest %'],['c','Years']],
  'hourly-salary':[['a','Hourly rate'],['b','Hours/week'],['c','Weeks/year']], 'salary-hourly':[['a','Annual salary'],['b','Hours/week'],['c','Weeks/year']], overtime:[['a','Hourly rate'],['b','Overtime hours'],['c','Multiplier']], 'fuel':[['a','Distance km'],['b','L/100km'],['c','Fuel price']], 'fuel-cost':[['a','Distance km'],['b','L/100km'],['c','Fuel price']], 'fuel-economy':[['a','Fuel used L'],['b','Distance km']],
  'km-miles':[['a','Kilometers']], 'miles-km':[['a','Miles']], 'kg-lbs':[['a','Kilograms']], 'lbs-kg':[['a','Pounds']], 'cm-in':[['a','Centimeters']], 'in-cm':[['a','Inches']], 'm-ft':[['a','Meters']], 'ft-m':[['a','Feet']], 'l-gal':[['a','Liters']], 'gal-l':[['a','US gallons']], 'psi-bar':[['a','PSI']], 'bar-psi':[['a','Bar']],
  ohms:[['a','Voltage'],['b','Resistance'],['c','Current']], power:[['a','Voltage'],['b','Current']], torque:[['a','Force'],['b','Lever arm']], sdt:[['a','Distance'],['b','Time']], density:[['a','Mass'],['b','Volume']], force:[['a','Mass'],['b','Acceleration']], pressure:[['a','Force'],['b','Area']], kinetic:[['a','Mass'],['b','Velocity']], potential:[['a','Mass'],['b','Height']], momentum:[['a','Mass'],['b','Velocity']], projectile:[['a','Launch angle°'],['b','Speed'],['c','Time']], 'rocket-dv':[['a','Initial mass'],['b','Final mass'],['c','Exhaust velocity']], twr:[['a','Thrust N'],['b','Mass kg']],
  bmi:[['a','Weight kg'],['b','Height cm']], bmr:[['a','Weight kg'],['b','Height cm'],['c','Age']], calories:[['a','Weight kg'],['b','Height cm'],['c','Age'],['d','Activity multiplier']], roi:[['a','Initial cost'],['b','Final value']], breakeven:[['a','Fixed costs'],['b','Price/unit'],['c','Variable cost/unit']], pace:[['a','Distance km'],['b','Time minutes']], 'run-time':[['a','Distance km'],['b','Pace min/km']], 'hours-minutes':[['a','Hours']], 'minutes-hours':[['a','Minutes']], 'temp-cf':[['a','Celsius']], 'temp-fc':[['a','Fahrenheit']], 'date-diff':[['a','Start date'],['b','End date']],
  accel:[['a','Final velocity'],['b','Initial velocity'],['c','Time']], velocity:[['a','Distance'],['b','Time']], work:[['a','Force'],['b','Distance']], 'mech-power':[['a','Work'],['b','Time']], frequency:[['a','Period seconds']], wavelength:[['a','Wave speed'],['b','Frequency']], 'res-series':[['a','R1'],['b','R2'],['c','R3']], 'res-parallel':[['a','R1'],['b','R2'],['c','R3']], gear:[['a','Driver teeth'],['b','Driven teeth']], belt:[['a','Pulley diameter m'],['b','RPM']], 'rpm-speed':[['a','Wheel diameter m'],['b','RPM']],
 };
 return map[kind]||[['a','Value']];
}

function inputType(key,kind){return kind==='date-diff'?'date':'number'}
function pageHtml(tool){
 const fspec=fieldsFor(tool.kind).map(([key,label])=>`<div class="field"><label>${label}</label><input data-key="${key}" type="${inputType(key,tool.kind)}" step="any" ${tool.kind==='date-diff'?'':''}></div>`).join('');
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${tool.title} | ToolAtlas</title><meta name="description" content="${tool.description} Use ToolAtlas free to get a fast, simple result."><link rel="canonical" href="https://toolatlas.online/${tool.slug}/"><meta property="og:title" content="${tool.title} | ToolAtlas"><meta property="og:description" content="${tool.description}"><link rel="stylesheet" href="/assets/style.css"></head><body><div class="wrap"><nav class="nav"><a class="brand" href="/">TOOL<span>ATLAS</span></a><input class="search" placeholder="Search tools…" onkeydown="if(event.key==='Enter') location='/?q='+encodeURIComponent(this.value)"></nav><main class="page"><div class="crumb"><a href="/">ToolAtlas</a> / ${categories[tool.category]}</div><div class="eyebrow">${categories[tool.category]}</div><h1>${tool.title}</h1><p class="desc">${tool.description}</p><section class="calc"><form id="calc" data-kind="${tool.kind}"><div class="fields">${fspec}</div><button class="submit" type="submit">Calculate</button><div id="result" class="result"></div></form></section><div class="note"><strong>How it works:</strong> Enter the values above and ToolAtlas calculates the result instantly in your browser. Review the result and adjust the inputs to compare scenarios.</div></main><footer class="footer">ToolAtlas · Free calculators, converters and practical tools.</footer></div><script src="/assets/runtime.js"></script></body></html>`;
}
for(const tool of unique){
 const dir=path.join(DIST,tool.slug);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),pageHtml(tool));
}
const cards=unique.map(t=>`<a class="tool" href="/${t.slug}/"><div class="tag">${categories[t.category]}</div><h3>${t.title}</h3><p>${t.description}</p></a>`).join('');
const home=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ToolAtlas — Free Tools for Everything</title><meta name="description" content="ToolAtlas is a growing collection of free calculators, converters, planners and practical tools for everyday life, work, travel, education and engineering."><link rel="canonical" href="https://toolatlas.online/"><link rel="stylesheet" href="/assets/style.css"></head><body><div class="wrap"><nav class="nav"><a class="brand" href="/">TOOL<span>ATLAS</span></a><input id="search" class="search" placeholder="Search ${unique.length} free tools…"></nav><section class="hero"><div class="eyebrow">THE INTERNET TOOLKIT</div><h1>Free tools for getting things done.</h1><p>Calculators, converters, planners and specialist tools. Fast, free and built to give you the answer without the bullshit.</p></section><section id="tools" class="tools">${cards}</section><footer class="footer">${unique.length} free tools · More added regularly · ToolAtlas</footer></div><script>const input=document.querySelector('#search'),cards=[...document.querySelectorAll('.tool')];input.addEventListener('input',()=>{const q=input.value.toLowerCase();cards.forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none')});</script></body></html>`;
fs.writeFileSync(path.join(DIST,'index.html'),home);
fs.writeFileSync(path.join(DIST,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://toolatlas.online/sitemap.xml\n');
const sitemap=['https://toolatlas.online/',...unique.map(t=>`https://toolatlas.online/${t.slug}/`)];
fs.writeFileSync(path.join(DIST,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap.map(u=>`<url><loc>${u}</loc></url>`).join('')}</urlset>`);
console.log(`Built ${unique.length} tool pages`);
