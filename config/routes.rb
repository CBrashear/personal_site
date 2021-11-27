Rails.application.routes.draw do
  root 'home#index'

  get '/about', to: 'home#about', as: 'about'
  get '/resume', to: 'home#resume', as: 'resume'
  get '/projects', to: 'home#projects', as: 'projects'
end
