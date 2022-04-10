class HomeController < ApplicationController
  def index
    @resume_pdf_path = root_path + "pdf/Brashear_Christopher_Resume.pdf"
  end
end
