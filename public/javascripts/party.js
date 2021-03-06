var party = new Vue({
    el: '#party_window',
    data: {
        spirit: '',
        spirits: [],
        avatars: [],
    },
    methods: {
        new_spirit: function(spirit){
            var newSpirit = {name: spirit.name, max_hp: spirit.stats.hp, hp: spirit.stats.hp, stats: spirit.stats, team: spirit.team, abilities: spirit.abilities};
            this.spirits.push(newSpirit);
            newSpirit.avatar = pixifySpirit(spirit,party);
            test.push(newSpirit);
        },
    }
})