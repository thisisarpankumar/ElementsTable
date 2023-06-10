var data = JSON.parse(JSON.stringify(element_data));

var emission_spectrum_src = data.emission_spectrum;
var wiki_src = data.wiki;
var video_src = data.video;
var img_src = data.image;
var lattice_src = data.lattice_structure;

document.querySelector(".elements #element-id").style.backgroundImage = `url('${img_src}')`
document.querySelector(".elements #element-id .youtube").setAttribute("href", video_src);
document.querySelector(".elements #element-id .image").setAttribute("href", img_src);
document.querySelector(".elements #element-id .wiki").setAttribute("href", wiki_src);
document.querySelector("title").textContent = data.english_name;
document.querySelector(".atm_no").textContent = data.atomic_number;
document.querySelector(".species").textContent = data.species;
document.querySelector("#element-name").textContent = data.symbol;
document.querySelector("#element-atm").textContent = data.atomic_weight;
document.querySelector(".element-grid-parameter .grid-parameter-content .lattice-image a").setAttribute("href", lattice_src);
document.querySelector(".element-grid-parameter .grid-parameter-content .lattice-image a img").setAttribute("src", lattice_src);
document.querySelector("#latin-name").textContent = data.latin_name;
document.querySelector("#year").textContent = data.year_discovered;
document.querySelector("#name").textContent = data.discovered_by;
document.querySelector("#K").textContent = data.Electron_shell[0].K;
document.querySelector("#L").textContent = data.Electron_shell[1].L;
document.querySelector("#M").textContent = data.Electron_shell[2].M;
document.querySelector("#N").textContent = data.Electron_shell[3].N;
document.querySelector("#O").textContent = data.Electron_shell[4].O;
document.querySelector("#P").textContent = data.Electron_shell[5].P;
document.querySelector("#Q").textContent = data.Electron_shell[6].Q;
document.querySelector("#R").textContent = data.Electron_shell[7].R;
document.querySelector("#no_e").textContent = data.epn_no[0].electrons;
document.querySelector("#no_p").textContent = data.epn_no[1].protons;
document.querySelector("#no_n").textContent = data.epn_no[2].neutrons;
document.querySelector("#atmno").textContent = data.atomic_number;
document.querySelector("#atmwt").textContent = data.atomic_weight;
document.querySelector("#density").textContent = data.density;
document.querySelector("#melting_pt").textContent = data.melting_point;
document.querySelector("#boiling_pt").textContent = data.boiling_point;
document.querySelector("#valence").textContent = data.valence_electrons;
document.querySelector("#period").textContent = data.period;
document.querySelector("#group").textContent = data.group;
document.querySelector("#block").textContent = data.block;
document.querySelector(".emission-spectrum a").setAttribute("href", emission_spectrum_src);
document.querySelector(".emission-spectrum a img").setAttribute("src", emission_spectrum_src);
document.querySelector("#phase").textContent = data.phase;
document.querySelector("#fusion-heat").innerHTML = data.fusion_heat;
document.querySelector("#specific-heat").innerHTML = data.specific_heat;
document.querySelector("#thermal-expansion").innerHTML = data.thermal_expansion;
document.querySelector("#vaporization-heat").innerHTML = data.vaporization_heat;
document.querySelector("#electronic-configuration").innerHTML = data.electron_configuration;
document.querySelector("#ion-charge").innerHTML = data.ion_charge;
document.querySelector("#oxidation-state").textContent = data.oxidation_state;
document.querySelector("#ionization-potential").textContent = data.ionization_potential;
document.querySelector("#atomic-radius").textContent = data.atomic_radius;
document.querySelector("#covalent-radius").textContent = data.covalent_radius;
document.querySelector("#van-radius").textContent = data.van_der_waals_radius;
document.querySelector("#electrical-conductivity").textContent = data.electrical_conductivity;
document.querySelector("#electrical-type").textContent = data.electrical_type;
document.querySelector("#magnetic-type").textContent = data.magnetic_type;
document.querySelector("#volume-susceptibility").textContent = data.volume_susceptibility;
document.querySelector("#mass-susceptibility").textContent = data.mass_susceptibility;
document.querySelector("#molar-susceptibility").innerHTML = data.molar_susceptibility;
document.querySelector("#resistivity").innerHTML = data.resistivity;
document.querySelector("#superconducting-point").textContent = data.superconducting_point;
document.querySelector("#crystal-structure").textContent = data.crystal_structure;
document.querySelector("#crystal-structure").textContent = data.crystal_structure;
document.querySelector("#grid").textContent = data.grid;
document.querySelector("#attitude").textContent = data.attitude;
document.querySelector("#debye-temperature").textContent = data.attitude;
document.querySelector("#space-group-name").innerHTML = data.space_group_name;
document.querySelector("#space-group-number").textContent = data.space_group_number;
document.querySelector("#CAS-number").textContent = data.CAS_number;
document.querySelector("#CID-number").textContent = data.CID_number;
document.querySelector("#RTEC-number").textContent = data.RTEC_number;
document.querySelector("#brinell-hardness").textContent = data.brinell_hardness;
document.querySelector("#mohs-hardness").textContent = data.mohs_hardness;
document.querySelector("#vickers-hardness").textContent = data.vickers_hardness;
document.querySelector("#bulk-modulus").textContent = data.bulk_modulus;
document.querySelector("#Young-modulus").textContent = data.Young_modulus;
document.querySelector("#liquid-density").innerHTML = data.liquid_density;
document.querySelector("#molar-volume").innerHTML = data.molar_volume;
document.querySelector("#poisson-ratio").textContent = data.poisson_ratio;
document.querySelector("#shear-modulus").textContent = data.shear_modulus;
document.querySelector("#sound-speed").textContent = data.sound_speed;
document.querySelector("#refractive-index").textContent = data.refractive_index;
document.querySelector("#thermal-conductivity").textContent = data.thermal_conductivity;
document.querySelector("#electrical-conductivity").innerHTML = data.electrical_conductivity;
document.querySelector("#electronegative").textContent = data.electronegative;
document.querySelector("#electron-affinity").textContent = data.electron_affinity;
document.querySelector("#radioactivity").textContent = data.radioactivity;
document.querySelector("#half-life").textContent = data.half_life;
document.querySelector("#life-time").textContent = data.life_time;
document.querySelector("#barn").textContent = data.barn;
document.querySelector(".hazard-block #red").textContent = data.hazard_block[0].red;
document.querySelector(".hazard-block #yellow").textContent = data.hazard_block[1].yellow;
document.querySelector(".hazard-block #blue").textContent = data.hazard_block[2].blue;
document.querySelector(".hazard-block #white").textContent = data.hazard_block[3].white;
document.querySelector("#fire-hazard").textContent = data.fire_hazard;
document.querySelector("#health-hazard").textContent = data.health_hazard;
document.querySelector("#reactivity-hazard").textContent = data.reactivity;
document.querySelector("#specific-hazard").textContent = data.specific;
document.querySelector("#universe").innerHTML = data.universe_contains;
document.querySelector("#sun").innerHTML = data.sun_contains;
document.querySelector("#oceans").innerHTML = data.oceans_contains;
document.querySelector("#human").innerHTML = data.human_body_contains;
document.querySelector("#earth").innerHTML = data.earth_crust_contains;
document.querySelector("#meteorites").innerHTML = data.meteorites_contains;

for( var i = 0; i < document.querySelectorAll("#english-name").length; i++)
{
    document.querySelectorAll("#english-name")[i].textContent = data.english_name;
}

var icon_list = document.querySelectorAll(".e-icon");
for (i = 0; i < icon_list.length; i++) {
    icon_list[i].textContent = data.symbol;
}

var iso_list = document.querySelectorAll("#e-isotope");

function range(start, end)
{
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

var j = range(data.start_isotope_number, data.stop_isotope_number)

for (i = 0; i < iso_list.length; i++) 
{
    let text = data.english_name + "<sup>" + j[i] + "</sup> <br> Half-Life: " + data.half_life_number[i] + " <br> Isotope weight: " + data.iso_weight[i] + " (g/mol) <br>"
    iso_list[i].innerHTML = text;
}



/* //this is to automate the process of making the contents of isotopes-content
var appendElement = document.getElementsByClassName("isotopes-content");
var appendElementContents = 
*/