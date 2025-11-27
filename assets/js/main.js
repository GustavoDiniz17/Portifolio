function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile-photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile-name')
    name.innerText = profileData.name

    const job = document.getElementById('profile-job')
    job.innerText = profileData.job

    const location = document.getElementById('profile-location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile-phone')
    phone.innerText = profileData.phone
    phone.href = `https://wa.me/55${profileData.phone}?text=Ol%C3%A1%20Gustavo%2C%20encontrei%20seu%20contato%20atrav%C3%A9s%20do%20portf%C3%B3lio%20dispon%C3%ADvel%20online%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.`

    const email = document.getElementById('profile-email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

(async () => {
    try {
        const profileData = await fetchProfileData()
        updateProfileInfo(profileData)
    } catch (error) {
        console.error('Erro ao carregar dados do perfil:', error)
        document.getElementById('profile-name').innerText = 'Erro ao carregar dados'
    }
})()