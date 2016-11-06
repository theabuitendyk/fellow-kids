# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Users

thea = User.create(name: 'Thea', username: 'thea', birth_year: 1994, password: 'testtest')
les = User.create(name: 'Les', username: 'les', birth_year: 1982, password: 'testtest')
galina = User.create(name: 'Galina', username: 'galina', birth_year: 1989, password: 'testtest')

owen = User.create(name: 'Owen', username: 'owen', birth_year: 1997, password: 'testtest')
timmy = User.create(name: 'Timmy', username: 'timmy', birth_year: 2002, password: 'testtest')
tiffany = User.create(name: 'Tiffany', username: 'tiffany', birth_year: 2002, password: 'testtest')
grandpa_joe = User.create(name: 'Gandpa Joe', username: 'grandpa_joe', birth_year: 1943, password: 'testtest')

# Conversations

convo1 = Conversation.create

Message.create(user: thea, conversation: convo1, original_type: :old, old_translation: 'sorry about that, talk to you later')
Message.create(user: owen, conversation: convo1, original_type: :youth, youth_translation: 'you should be, that was hella whack')
Message.create(user: owen, conversation: convo1, original_type: :youth, youth_translation: 'we\'ll figure it out tomorrow')
Message.create(user: thea, conversation: convo1, original_type: :old, old_translation: 'text you?')
Message.create(user: owen, conversation: convo1, original_type: :youth, youth_translation: 'yas')
Message.create(user: thea, conversation: convo1, original_type: :old, old_translation: 'ok')

convo2 = Conversation.create

Message.create(user: grandpa_joe, conversation: convo2, original_type: :old, old_translation: 'Are you cool?')
Message.create(user: timmy, conversation: convo2, original_type: :youth, youth_translation: 'i am hyphie af')
Message.create(user: grandpa_joe, conversation: convo2, original_type: :old, old_translation: 'Timothy!')
Message.create(user: grandpa_joe, conversation: convo2, original_type: :old, old_translation: 'Language!!!')
Message.create(user: timmy, conversation: convo2, original_type: :youth, youth_translation: 'wat?')
Message.create(user: timmy, conversation: convo2, original_type: :youth, youth_translation: 'i\'m just sayin\'')

convo3 = Conversation.create

Message.create(user: thea, conversation: convo3, original_type: :old, old_translation: 'Words Words')
Message.create(user: les, conversation: convo3, original_type: :old, old_translation: 'Things Things')
Message.create(user: galina, conversation: convo3, original_type: :old, old_translation: 'Stuff Stuff')
Message.create(user: les, conversation: convo3, original_type: :old, old_translation: 'Junk Junk')
Message.create(user: galina, conversation: convo3, original_type: :old, old_translation: 'Huh Huh')
Message.create(user: thea, conversation: convo3, original_type: :old, old_translation: 'Yup Yup')

Message.all.each { |m| m.translate }
