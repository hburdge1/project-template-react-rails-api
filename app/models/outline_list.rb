class OutlineList < ApplicationRecord

  def create
    outline = OutlineList.create!(outline_params)
    render json: outline, status: :created
  end

  private

  def outline_params
    params.permit(:unfilled_portions)
  end
end
