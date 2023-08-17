import about from './projects.module.css';
import "./projects.css"

const About = ()=>{
    return(<>
        <div className={about.about_container}>
            {/* <div className={about.persInfo_sub_container}> */}
                <div className={about.about_title}>
                    <h3 style={{marginTop: '0'}} >ABOUT</h3>
                </div>
                <div className={about.about_inputs}>
                   <p >Its a long established fact that reader will get distraction by readable contant of the page while looking at it and its layout
                   </p>
                   <div className={about.about_icon_ct}>
                    <div className={about.about_icon_box}>
                        <div className={about.about_icon_div}>
                            <img src='https://cdn2.iconfinder.com/data/icons/art-3-1/100/1-10-512.png' />
                        </div>
                        <p>6 June 1999</p>
                    </div>
                    <div className={about.about_icon_box}>
                        <div className={about.about_icon_div}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcjOi_kpw21q781vUUNVknP_d6G00B3C8D7Y59JYiThnFnKvOyQLLfbSx_pplIYm4TB8&usqp=CAU' />
                        </div>
                        <p>English French German</p>
                    </div>
                    <div className={about.about_icon_box}>
                        <div className={about.about_icon_div}>
                            <img src='https://www.creativefabrica.com/wp-content/uploads/2019/02/Flag-Icon-by-Kanggraphic-580x386.jpg' />
                        </div>
                        <p>USA</p>
                    </div>
                    <div className={about.about_icon_box}>
                        <div className={about.about_icon_div}>
                            <img src='https://thumbs.dreamstime.com/b/shield-checkmark-icon-security-vector-icon-symbol-download-shield-checkmark-icon-security-vector-icon-symbol-131050407.jpg' />
                        </div>
                        <p>Music Reading Journey</p>
                    </div>
                   {/* </div> */}
                </div>
                
            </div>
            <div style={{border: 'none'}} className={about.persInfo_sub_container}>
                <div className={about.about_title}>
                    <h3 style={{margin: '10px'}}>CONTACT</h3>
                </div>
                <div className={about.about_inputs}>
                   <div className={about.contact_icon_ct}>
                    <div className={about.about_icon_box}>
                        <div className={about.contact_icon_div}>
                            <img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png' />
                        </div>
                        <p>6 June 1999</p>
                    </div>
                    <div className={about.about_icon_box}>
                        <div className={about.contact_icon_div}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMV4UraOX0EtIkIDRf103wFE_rVVVkdxbaSAECbcgWA&s' />
                        </div>
                        <p>English French German</p>
                    </div>
                    
                   </div>
                   <div className={about.about_hr_icons}>
                        <div className={about.contact_circle_icon_box}>
                        <div className={about.contact_icon_div}>
                            <img src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' />
                        </div>
                        </div>
                        <div className={about.contact_circle_icon_box}>
                        <div className={about.contact_icon_div}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx19LmS5NDenTrmliANTv4MMM0yQQ8Z49MpymbLo4v4gzLhqMv724ZJ_HBPpmhgoIX0Vc&usqp=CAU' />
                        </div>
                        </div>
                        <div className={about.contact_circle_icon_box}>
                        <div className={about.contact_icon_div}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGD5EWRaao1UOuKbc_c3LJURlCJZCZ8wjAOxWxcAtWe3RpeZeYV_OSPlpzbftXgyiLLE&usqp=CAU' />
                        </div>
                        </div>
                        <div className={about.contact_circle_icon_box}>
                        <div className={about.contact_icon_div}>
                            <img src='https://cdn-icons-png.flaticon.com/512/145/145812.png' />
                        </div>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
        </>)
}

export {About}