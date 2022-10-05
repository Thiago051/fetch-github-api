const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário">
                    <div class="data">
                        <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                        <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                        <div class="follow">
                            <span>
                                👨‍👩‍👦
                                Seguidores: ${user.followers} |
                                Seguindo: ${user.following}
                            </span>
                        </div>
                    </div>
             </div>`
    },
    renderRepositories(user){
        let repositoriesItens = ""
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=
                `<div class="repositories">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                 </div>`
        }
    },
    renderEvents(user) {
        let userEventList = user.events.filter(event => event.type == "PushEvent")

        userEventList.forEach(event => console.log(event.payload.commits[0].message))
        let userEvents = ""
        userEventList.forEach(event => {
            userEvents +=
                `<li>
                    <p>${event.repo.name}</p> - ${event.payload.commits[0].message ?? '...'}
                </li>`
        })
        if (user.events.length > 0) {
            this.userProfile.innerHTML +=
                `<div class="events">
                    <h2>Eventos</h2>
                    <ul>${userEvents}</ul>
                 </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }