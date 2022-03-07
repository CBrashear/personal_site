Rails.application.routes.draw do
  # Pages
  root 'home#index'

  # Service
  get '/download', to: 'home#download', as: 'download'
end
